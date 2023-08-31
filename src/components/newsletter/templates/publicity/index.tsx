/* eslint-disable @next/next/no-img-element */
import { Archive } from 'iconsax-react'
import ShareIcon from '@mui/icons-material/Share'
import stringStyle from './stringStyles'
import styles from './news.module.css'

interface PublicityProps {
  textHeader: string
  img: {
    path: string
    data: string
    success: boolean
    dataPreview: string
    manteinAspect: boolean
  }
  title: string
  tags?: string[]
  text: string
  color: string
  bagroundColor: string
}

const PublicityTemplate = ({
  textHeader,
  img,
  title,
  tags = [],
  text,
  color,
  bagroundColor
}: PublicityProps) => {
  interface ReadingTimeProps {
    text: string
    wordsPerMinute: number
  }
  const calculateReadingTime = ({ text, wordsPerMinute }: ReadingTimeProps) => {
    const words = text.split(/\s+/).filter(word => word !== '')

    const wordCount = words.length

    const readingTimeMinutes = wordCount / wordsPerMinute

    return readingTimeMinutes
  }

  console.log('htmlEmail', img)

  return (
    <>
      <div
        style={{
          ...stringStyle.news_template_content
        }}
      >
        <div
          style={{
            ...stringStyle.news_template_textHeader,
            background: `linear-gradient(270deg, rgba(235, 186, 89, 0) 0%, ${color} 99.17%)`
          }}
          className={styles.contentTitleHeader}
          dangerouslySetInnerHTML={{ __html: textHeader }}
        ></div>
        <div
          style={{
            ...stringStyle.news_template_img,
            backgroundColor: bagroundColor
          }}
        >
          {img?.dataPreview?.length > 0 ? (
            <img
              alt="img"
              src={img.dataPreview}
              style={
                img.manteinAspect
                  ? {
                      objectFit: 'cover',
                      height: 241,
                      width: 482
                    }
                  : {
                      objectFit: 'contain',
                      width: '100%',
                      height: 241
                    }
              }
            />
          ) : (
            <img
              alt="img"
              src={img.data}
              style={
                img.manteinAspect
                  ? {
                      objectFit: 'cover',
                      height: 241,
                      width: 482
                    }
                  : {
                      objectFit: 'contain',
                      width: '100%',
                      height: 241
                    }
              }
            />
          )}
        </div>
        <div
          style={{
            ...stringStyle.news_template_contentData
          }}
        >
          <div
            style={stringStyle.news_template_title}
            dangerouslySetInnerHTML={{ __html: title }}
            className={styles.contentTitle}
          ></div>
          <div style={stringStyle.news_template_contentinfo}>
            <div style={stringStyle.news_template_info}>
              <div style={stringStyle.news_template_infodate}>
                <div>
                  {new Date().toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                  {' - ' +
                    calculateReadingTime({ text, wordsPerMinute: 250 }).toFixed(
                      2
                    ) +
                    ' min lectura'}
                </div>
              </div>
              <div style={stringStyle.news_template_tags}>
                {tags.map((item: any, index) => (
                  <div key={index} style={stringStyle.news_template_tag}>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <div style={stringStyle.news_template_btns}>
              <div style={stringStyle.news_template_btn}>
                <Archive size="16" />
              </div>
              <div style={stringStyle.news_template_btn}>
                <ShareIcon sx={{ fontSize: '16px' }} />
              </div>
            </div>
          </div>
          <div
            style={{
              ...stringStyle.news_template_text,
              textAlign: 'justify'
            }}
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default PublicityTemplate
