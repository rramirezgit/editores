import HeaderTemplate from '@/components/newsletter/templates/header'
import NewsTemplate from '@/components/newsletter/templates/news'
import { useEffect } from 'react'
import sendDataNewsletter from './sendDataNewsletter'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/router'

const PreviewHtml = () => {
  const { templates } = useSelector((state: RootState) => state.newsletter)
  const { user } = useUser()
  const rediret = useRouter()

  useEffect(() => {
    // const styles = document.querySelectorAll('head style')
    // styles.forEach(style => style.remove())
    if (user) {
      sendDataNewsletter(user)
    } else {
      rediret.push('/api/auth/login')
    }
  }, [])

  return (
    <div
      style={{
        width: '100%',
        height: 'max-content',
        backgroundColor: '#f6f7fb',
        alignItems: 'center',
        gap: '1rem',
        padding: '20px 0'
      }}
      id="previwHtml"
    >
      <table
        width="100%"
        style={{
          borderCollapse: 'separate',
          borderSpacing: '0 10px'
        }}
      >
        <tr>
          <td align="center" valign="top">
            {templates.header && (
              <HeaderTemplate
                color={templates.header.color}
                haveSponsored={templates.header.haveSponsored}
                Texto={templates.header.textHeader}
                logo={templates.header.imgHeader}
                sponsor={templates.header.imgSponsored}
              />
            )}
          </td>
        </tr>
        <tr>
          <td align="center">
            {templates.news.map((news, index) => (
              <NewsTemplate
                key={index}
                color={news.color}
                img={news.img}
                title={news.title}
                textHeader={news.textHeader}
                text={news.text}
                readingTime={news.readingTime}
              />
            ))}
          </td>
        </tr>
      </table>
    </div>
  )
}

export default PreviewHtml
