/* eslint-disable @next/next/no-img-element */
import React from 'react'
import stringStyle from './stringStyles'

const socialMedia = [
  { id: 1, img: '/images/newsletter/instagram.svg' },
  { id: 2, img: '/images/newsletter/twitter.svg' },
  { id: 3, img: '/images/newsletter/tiktok.svg' },
  { id: 4, img: '/images/newsletter/linkedin.svg' },
  { id: 5, img: '/images/newsletter/facebook.svg' }
]

const Footer = () => {
  return (
    <div style={{ ...stringStyle.footer_content }}>
      <div style={stringStyle.footer_content_title}>ADAC</div>
      <div style={stringStyle.footer_content_title}>
        Estás recibiendo este email porque eres suscriptor de la Newsletter de
        ADAC
      </div>
      <div style={stringStyle.footer_socialMedia_content}>
        {socialMedia.map((item: any, index: number) => (
          <div key={index} style={stringStyle.footer_socialMedia}>
            <img src={item.img} alt="img" />
          </div>
        ))}
      </div>
      <div style={stringStyle.unsubscribe_content}>
        <a style={stringStyle.unsubscribe}>Unsubscribe</a>
      </div>
      <div style={stringStyle.footer_image}>
        <img src="/images/newsletter/logo.svg" alt="img" />
      </div>
    </div>
  )
}

export default Footer
