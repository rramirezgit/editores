/* eslint-disable prefer-spread */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from 'react'

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
  convertToPixelCrop
} from 'react-image-crop'
import { canvasPreview } from './canvasPreview'
import { useEffect, DependencyList } from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { s3Client } from '@/pages/newsletter'
import { Button, Slider, Typography } from '@mui/material'
import styles from './Crop.module.css'
import ColorPicker from '@/components/newsletter/inputs/colorPicker'

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  )
}
interface Props {
  image: {
    file: any
    data: string
  }
  setSelectedImage: (image: any) => void
  setShowCrop?: (showCrop: boolean) => void
}

export default function Crop({ image, setSelectedImage, setShowCrop }: Props) {
  const imgRef = useRef<HTMLImageElement>(null)
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null)
  const blobUrlRef = useRef('')
  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)
  const [aspect, setAspect] = useState<number | undefined>(16 / 9)
  const { previewCanvasRef } = useSelector(
    (state: RootState) => state.newsletter
  )

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }

  function onDownloadCropClick() {
    if (!previewCanvasRef.current) {
      throw new Error('Crop canvas does not exist')
    }

    const base64Image = previewCanvasRef.current.toDataURL(image.file.type)
    const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '')
    const buffer = Buffer.from(base64Data, 'base64')

    s3Client.upload(
      {
        Bucket: 'adac-development/Media',
        ContentType: image.file.type,
        Key: image.file.name,
        Body: buffer,
        ContentEncoding: 'base64'
      },
      (err: any, data: any) => {
        if (err) {
          console.log(err)
          setShowCrop && setShowCrop(false)
          return
        }
        setSelectedImage({
          data: data.Location,
          file: {
            name: image.file.name,
            type: image.file.type
          }
        })
        setShowCrop && setShowCrop(false)
      }
    )
  }

  function useDebounceEffect(fn: any, waitTime: number, deps?: DependencyList) {
    useEffect(() => {
      const t = setTimeout(() => {
        fn.apply(undefined, deps)
      }, waitTime)

      return () => {
        clearTimeout(t)
      }
    }, deps)
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        )
      }
    },
    100,
    [completedCrop, scale, rotate]
  )

  function handleToggleAspectClick() {
    if (aspect) {
      setAspect(undefined)
    } else if (imgRef.current) {
      const { width, height } = imgRef.current
      setAspect(16 / 9)
      const newCrop = centerAspectCrop(width, height, 16 / 9)
      setCrop(newCrop)
      // Updates the preview
      setCompletedCrop(convertToPixelCrop(newCrop, width, height))
    }
  }

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.escala}>
          <Typography>Escala</Typography>
          <Slider
            size="small"
            defaultValue={1}
            step={0.1}
            min={0.1}
            max={5}
            value={scale}
            marks
            valueLabelDisplay="auto"
            disabled={!image.data}
            color={'warning' as 'primary'}
            onChange={(event: Event, newValue: number | number[]) =>
              setScale(Number(newValue))
            }
          />
        </div>
        <div>
          <Typography>Rotar</Typography>
          <Slider
            size="small"
            color={'warning' as 'primary'}
            step={1}
            min={-180}
            max={180}
            value={rotate}
            marks
            valueLabelDisplay="auto"
            disabled={!image.data}
            onChange={(event: Event, newValue: number | number[]) =>
              setRotate(Math.min(180, Math.max(-180, Number(newValue))))
            }
          />
        </div>

        <ColorPicker label="Fondo imagen" name="bagroundColor" />

        <div>
          <Button
            onClick={handleToggleAspectClick}
            color={aspect ? 'warning' : 'primary'}
            variant="outlined"
          >
            Cambiar Aspecto {aspect ? 'desactivado' : 'activado'}
          </Button>
        </div>
      </div>
      {!!image.data && (
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={c => setCompletedCrop(c)}
          aspect={aspect}
        >
          <img
            ref={imgRef}
            alt="Crop me"
            src={image.data}
            style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
            onLoad={onImageLoad}
          />
        </ReactCrop>
      )}
      {!!completedCrop && (
        <>
          <div>
            <Button
              onClick={onDownloadCropClick}
              color="warning"
              variant="contained"
            >
              Recortar
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
