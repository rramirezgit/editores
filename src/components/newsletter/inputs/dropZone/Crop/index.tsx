/* eslint-disable prefer-spread */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from 'react'

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop
} from 'react-image-crop'
import { useEffect, DependencyList } from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import { s3Client } from '@/pages/newsletter'
import { Button, Slider, Typography } from '@mui/material'
import styles from './Crop.module.css'
import ColorPicker from '@/components/newsletter/inputs/colorPicker'
import { imgPreview } from './imgPreview'
import CheckLabel from '@/components/common/inputs/checkLabel'
import { useDispatch } from 'react-redux'
import { setLoadImages } from '@/store/slices/newsletter'

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
    success: boolean
    dataPreview: string
  }
  setSelectedImage: (image: any) => void
  setShowCrop?: (showCrop: boolean) => void
  setAspectImage?: any
  aspectImage?: boolean
}

export default function Crop({
  image,
  setSelectedImage,
  setShowCrop,
  setAspectImage,
  aspectImage
}: Props) {
  const imgRef = useRef<HTMLImageElement>(null)
  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)
  const [aspect, setAspect] = useState<number | undefined>()
  const dispatch = useDispatch()

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }

  function onDownloadCropClick() {
    if (image?.dataPreview?.length === 0) {
      throw new Error('No image to download')
    }

    const base64Data = image?.dataPreview.replace(
      /^data:image\/\w+;base64,/,
      ''
    )
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
        dispatch(setLoadImages(false))
        setShowCrop && setShowCrop(false)
        setSelectedImage({
          data: data.Location,
          file: {
            name: image.file.name,
            type: image.file.type
          },
          dataPreview: '',
          success: true,
          manteinAspect: aspectImage
        })
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
      if (completedCrop?.width && completedCrop?.height && imgRef?.current) {
        const b64 = imgPreview(imgRef.current, completedCrop, scale, rotate)
        setSelectedImage({
          data: image.data,
          file: image.file,
          success: false,
          dataPreview: b64,
          manteinAspect: aspectImage
        })
      }
    },
    100,
    [completedCrop, scale, rotate]
  )

  function handleToggleAspectClick(e: any) {
    setSelectedImage({
      data: image.data,
      file: image.file,
      success: false,
      dataPreview: image.dataPreview,
      manteinAspect: e.target.checked
    })
    setAspectImage && setAspectImage(e.target.checked)
  }

  const onCancelCropClick = () => {
    dispatch(setLoadImages(false))

    setSelectedImage({
      data: 'Ñ=',
      file: '',
      success: false,
      dataPreview: '',
      manteinAspect: aspectImage
    })
    setShowCrop && setShowCrop(false)
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
          <CheckLabel
            label="Ajustar imagen"
            onClick={handleToggleAspectClick}
          />
        </div>
      </div>
      {!!image.data && (
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={c => setCompletedCrop(c)}
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
      <div className={styles.buttons}>
        <Button onClick={onCancelCropClick} color="warning" variant="contained">
          Cancelar
        </Button>
        <Button
          onClick={onDownloadCropClick}
          color="primary"
          variant="contained"
        >
          Guardar
        </Button>
      </div>
    </div>
  )
}
