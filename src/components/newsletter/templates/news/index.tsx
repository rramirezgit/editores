import { Archive } from 'iconsax-react'
import ShareIcon from '@mui/icons-material/Share'
import { icons } from '@/components/commingSoon/socialMediaIcons/icons'
import Image from 'next/image'
import stringStyle from './stringStyles'
import styles from './news.module.css'

interface NewsTemplateProps {
  textHeader: string
  img: {
    path: string
    data: string
  }
  title: string
  readingTime: string
  tags?: string[]
  text: string
  color: string
}

const NewsTemplate = ({
  textHeader,
  img,
  title,
  readingTime,
  tags = [],
  text,
  color
}: NewsTemplateProps) => {
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
        <div style={stringStyle.news_template_img}>
          <img
            alt="img"
            height={241}
            src={img.data}
            width={482}
            style={{
              objectFit: 'cover'
            }}
          />
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
                </div>
                <div>{readingTime}</div>
              </div>
              <div style={stringStyle.news_template_tags}>
                {tags.map((item, index) => (
                  <div key={index} style={stringStyle.news_template_tag}></div>
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
          {/* <div style={stringStyle.news_template_social}>
            {icons.map((item, index) => (
              <div
                aria-label="social-media"
                key={index}
                style={stringStyle.news_template_icon}
                onClick={() => {
                  window.open(item.href, '_blank')
                }}
              >
               <img
                  alt="social-media"
                  height={24}
                  src={item.src}
                  width={24}
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  )
}

export default NewsTemplate
