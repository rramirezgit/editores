/* eslint-disable @next/next/no-img-element */
import stringStyle from './stringStyles'
import styles from './news.module.css'
import socialmediaStyle from '@/components/common/socialMedia/socialmediaStyle'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

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
  Facebook?: string
  Instagram?: string
  Twitter?: string
  Linkedin?: string
  Tiktok?: string
  socialMediasColor?: string
}

const PublicityTemplate = ({
  textHeader,
  img,
  title,
  text,
  color,
  bagroundColor,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Tiktok,
  socialMediasColor
}: PublicityProps) => {
  const [SocialMedia, setSocialMedia] = useState<any[]>([])

  useEffect(() => {
    const dataSocialMedia = [
      {
        id: 1,
        img: 'https://adac-development.s3.us-west-2.amazonaws.com/Media/_Instagram.png',
        href: Instagram
      },
      {
        id: 2,
        img: 'https://adac-development.s3.us-west-2.amazonaws.com/Media/layer1.png',
        href: Twitter
      },
      {
        id: 3,
        img: 'https://adac-development.s3.us-west-2.amazonaws.com/Media/_TikTok.png',
        href: Tiktok
      },
      {
        id: 4,
        img: 'https://adac-development.s3.us-west-2.amazonaws.com/Media/_Linkedin.png',
        href: Linkedin
      },
      {
        id: 5,
        img: 'https://adac-development.s3.us-west-2.amazonaws.com/Media/_Facebook_.png',
        href: Facebook
      }
    ]
    setSocialMedia(dataSocialMedia)
  }, [Facebook, Instagram, Twitter, Linkedin, Tiktok])
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
          <div
            style={{
              ...stringStyle.news_template_text,
              textAlign: 'justify'
            }}
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
          <div style={stringStyle.news_SocialMedia}>
            <div style={socialmediaStyle.footer_socialMedia_content}>
              {SocialMedia.map((item: any, index: number) => {
                if (!item.href) return null
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      key={index}
                      style={{
                        ...socialmediaStyle.footer_socialMedia,
                        backgroundColor: socialMediasColor
                      }}
                    >
                      <img src={item.img} alt="img" width={18} height={18} />
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PublicityTemplate
