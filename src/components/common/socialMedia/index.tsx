/* eslint-disable @next/next/no-img-element */
import React from 'react'
import socialmediaStyle from './socialmediaStyle'

const socialMedia = [
  {
    id: 1,
    img: 'https://adac-development.s3.us-west-2.amazonaws.com/Media/_Instagram.png',
    href: 'https://www.instagram.com/adac.mx/?igshid=YmMyMTA2M2Y%3D'
  },
  {
    id: 2,
    img: 'https://adac-development.s3.us-west-2.amazonaws.com/Media/layer1.png',
    href: 'https://twitter.com/adacblog?s=11&t=X1mzTgR73CGzDc5inpfG3Q'
  },
  {
    id: 3,
    img: 'https://adac-development.s3.us-west-2.amazonaws.com/Media/_TikTok.png',
    href: 'https://www.tiktok.com/@adac.mx?_t=8aiajvpippc&_r=1'
  },
  {
    id: 4,
    img: 'https://adac-development.s3.us-west-2.amazonaws.com/Media/_Linkedin.png',
    href: 'https://www.linkedin.com/company/adacmx/'
  },
  {
    id: 5,
    img: 'https://adac-development.s3.us-west-2.amazonaws.com/Media/_Facebook_.png',
    href: 'https://www.facebook.com/profile.php?id=100090649664671'
  }
]

export const SocialMedia = () => {
  return (
    <div style={socialmediaStyle.footer_socialMedia_content}>
      {socialMedia.map((item: any, index: number) => (
        <a key={index} href={item.href} target="_blank" rel="noreferrer">
          <div key={index} style={socialmediaStyle.footer_socialMedia}>
            <img src={item.img} alt="img" width={18} height={18} />
          </div>
        </a>
      ))}
    </div>
  )
}
