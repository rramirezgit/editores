import { IconButton, Tooltip } from '@mui/material'
import styles from './selectNewsTemplate.module.css'
import { CloseCircle, Gallery } from 'iconsax-react'
import { useDispatch } from 'react-redux'
import {
  addNews,
  addPublicity,
  setShowSelectTemplate
} from '@/store/slices/newsletter'
import { add } from 'date-fns'
import newsImage from '@/assets/thumbnail/Noticias.png'
import publicityImage from '@/assets/thumbnail/Publicidad.png'
import fondeo from '@/assets/thumbnail/Fondeo.png'
import graficas from '@/assets/thumbnail/Graficas.png'
import quote from '@/assets/thumbnail/Quote.png'
import Image from 'next/image'

const SelectNewsTemplate = () => {
  const dispatch = useDispatch()
  const handleClickClose = () => {
    dispatch(setShowSelectTemplate(false))
  }
  const handleClickNews = () => {
    dispatch(
      addNews({
        id: `news-${add(new Date(), { seconds: 1 }).getTime().toString()}`
      })
    )
    dispatch(setShowSelectTemplate(false))
  }

  const handleClickPublicity = () => {
    dispatch(
      addPublicity({
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

      <div className={styles.contentTags}>
        <div>
          <div className={styles.title}>Noticia</div>
          <div onClick={handleClickNews}>
            <Image src={newsImage} alt="news" className={styles.template1} />
          </div>
        </div>

        {/* <div>
          <div className={styles.title}>publicidad</div>
          <div onClick={handleClickPublicity}>
            <Image
              src={publicityImage}
              alt="publicity"
              className={styles.template1}
            />
          </div>
        </div>

        <div>
          <div className={styles.title}>Fondeo</div>
          <div onClick={handleClickPublicity}>
            <Image src={fondeo} alt="fondeo" className={styles.template1} />
          </div>
        </div>

        <div>
          <div className={styles.title}>Graficas</div>
          <div onClick={handleClickPublicity}>
            <Image src={graficas} alt="graficas" className={styles.template1} />
          </div>
        </div>

        <div>
          <div className={styles.title}>Quote</div>
          <div onClick={handleClickPublicity}>
            <Image src={quote} alt="quote" className={styles.template1} />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default SelectNewsTemplate
