/* eslint-disable @next/next/no-img-element */
import React from 'react'
import stringStyle from './stringStyles'
import { SocialMedia } from '@/components/common/socialMedia'

const Footer = () => {
  return (
    <div style={{ ...stringStyle.footer_content }}>
      <div style={stringStyle.footer_content_title}>ADAC</div>
      <div style={stringStyle.footer_content_title}>
        Estás recibiendo este email porque eres suscriptor de la Newsletter de
        ADAC
      </div>
      <div style={stringStyle.news_SocialMedia}>
        <SocialMedia />
      </div>

      <div style={stringStyle.unsubscribe_content}>
        <a style={stringStyle.unsubscribe} href="{{urlUnsubscribe}}">
          Unsubscribe
        </a>
      </div>
      <div style={stringStyle.footer_image}>
        <img
          src="https://adac-development.s3.us-west-2.amazonaws.com/Media/logoAdac.png"
          width={88}
          height={32}
          alt="img"
        />
      </div>
    </div>
  )
}

export default Footer
