import React from 'react'
import Layout from '../../layout'
import UrlInput from '@/components/newsletter/inputs/urls'

const UrlSocialMedia = () => {
  return (
    <>
      <Layout>
        <UrlInput
          name="Instagram"
          iconHref="https://adac-development.s3.us-west-2.amazonaws.com/Media/_Instagram.png"
        />
        <UrlInput
          name="Twitter"
          iconHref="https://adac-development.s3.us-west-2.amazonaws.com/Media/layer1.png"
        />
        <UrlInput
          name="Tiktok"
          iconHref="https://adac-development.s3.us-west-2.amazonaws.com/Media/_TikTok.png"
        />
        <UrlInput
          name="Linkedin"
          iconHref="https://adac-development.s3.us-west-2.amazonaws.com/Media/_Linkedin.png"
        />
        <UrlInput
          name="Facebook"
          iconHref="https://adac-development.s3.us-west-2.amazonaws.com/Media/_Facebook_.png"
        />
      </Layout>
    </>
  )
}

export default UrlSocialMedia
