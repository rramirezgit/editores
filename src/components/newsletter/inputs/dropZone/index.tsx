import { colors } from '@/styles/variables'
import { GalleryExport } from 'iconsax-react'
import React, { useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import styles from './dropZone.module.css'
import { Button } from '@mui/material'
import { useField } from 'formik'
import { useEffect, useState } from 'react'
import Crop from './Crop'
import { setLoadImages } from '@/store/slices/newsletter'
import { useDispatch } from 'react-redux'

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 1.5,
  borderRadius: 7.875,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
}

const focusedStyle = {
  borderColor: colors.primary_yellow
}

const acceptStyle = {
  borderColor: colors.primary_yellow
}

const rejectStyle = {
  borderColor: '#ff1744'
}

interface DropZoneProps {
  label: string
  name: string
}

const DropZone = ({ label, ...props }: DropZoneProps) => {
  const [, , helpers] = useField(props)
  const [showCrop, setShowCrop] = useState(false)
  const [aspectImage, setaspectImage] = useState(false)
  const [selectedImage, setSelectedImage] = useState<any>({
    file: '',
    data: '',
    dataPreview: '',
    path: '',
    manteinAspect: aspectImage
  })
  const dispatch = useDispatch()

  const handleDrop = (acceptedFiles: any[]) => {
    const file: any = acceptedFiles[0]
    const reader = new FileReader()
    reader.onload = async e => {
      if (e.target?.result) {
        setSelectedImage({
          file,
          data: e.target?.result,
          dataPreview: e.target?.result,
          manteinAspect: aspectImage
        })
        setShowCrop(true)
        dispatch(setLoadImages(true))
      }
    }
    reader.readAsDataURL(file)
  }

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    isDragActive
  } = useDropzone({
    accept: { 'image/jpeg': [], 'image/png': [] },
    onDrop: handleDrop
  })

  const style: any = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isFocused, isDragAccept, isDragReject]
  )

  useEffect(() => {
    if (selectedImage.data !== '' && selectedImage.data !== undefined) {
      helpers.setValue(selectedImage)
    }
  }, [selectedImage])

  return (
    <div className={styles.layout}>
      <div>
        <div className={styles.label}>{label}</div>
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <div className={styles.content}>
            <GalleryExport size="44" color="#d9e3f0" />
            <div className={styles.info}>
              <div className={styles.infotext}>
                {isDragActive
                  ? 'Suelta la imagen aquí'
                  : 'Arrastra y suelta la imagen aquí, o haz clic para seleccionarla'}
              </div>
              <div className={styles.infotype}>JPG o PNG de hasta 10 MB</div>
            </div>
            <Button
              variant="outlined"
              color="primary"
              classes={{ root: styles.button }}
            >
              imagen
            </Button>
          </div>
        </div>
      </div>
      {showCrop && (
        <>
          <Crop
            image={selectedImage}
            setSelectedImage={setSelectedImage}
            setShowCrop={setShowCrop}
            setAspectImage={setaspectImage}
            aspectImage={aspectImage}
          />
        </>
      )}
    </div>
  )
}

export default DropZone
