import { IconButton, Tooltip } from '@mui/material'
import styles from './selectNewsTemplate.module.css'
import { CloseCircle, Gallery } from 'iconsax-react'
import { useDispatch } from 'react-redux'
import { addNews, setShowSelectTemplate } from '@/store/slices/newsletter'
import { add } from 'date-fns'

const SelectNewsTemplate = () => {
  const dispatch = useDispatch()
  const handleClickClose = () => {
    dispatch(setShowSelectTemplate(false))
  }
  const handleClickTemplate1 = () => {
    dispatch(
      addNews({
        id: `news-${add(new Date(), { seconds: 1 }).getTime().toString()}`
      })
    )
    dispatch(setShowSelectTemplate(false))
  }

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <div>Seleccionar el tipo de template</div>
        <div>
          <Tooltip title="Cerrar" placement="top">
            <IconButton size="small" onClick={handleClickClose}>
              <CloseCircle size="32" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div>
        <div>
          <div className={styles.title}>Noticia</div>
          <div className={styles.template1} onClick={handleClickTemplate1}>
            <div className={styles.template1_img}>
              <Gallery size="50" color="white" />
            </div>
            <div className={styles.template1_title}></div>
            <div className={styles.template1_desc}></div>
            <div className={styles.template1_desc}></div>
            <div className={styles.template1_desc}></div>
            <div className={styles.template1_contentsocial}>
              <div className={styles.template1_social}></div>
              <div className={styles.template1_social}></div>
              <div className={styles.template1_social}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectNewsTemplate
