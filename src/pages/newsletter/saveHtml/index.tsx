import HeaderTemplate from '@/components/newsletter/templates/header'
import NewsTemplate from '@/components/newsletter/templates/news'
import { useEffect } from 'react'
import getHtml from './sendDataNewsletter'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/router'
import useAWSSes from '@/hooks/aws/ses'
import Footer from '@/components/newsletter/templates/footer'

const SaveHTML = () => {
  const { templates } = useSelector((state: RootState) => state.newsletter)
  const { user } = useUser()
  const rediret = useRouter()
  const { sendEmail } = useAWSSes(
    process.env.NEXT_PUBLIC_AWS_CLIENT_ACCESS_KEY_ID as string,
    process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
    process.env.NEXT_PUBLIC_AWS_REGION as string
  )

  useEffect(() => {
    // const styles = document.querySelectorAll('head style')
    // styles.forEach(style => style.remove())
    if (user) {
      const html = getHtml(user)
      sendEmail({
        Content: {
          Simple: {
            Body: {
              Html: {
                Data: html
              },
              Text: {
                Data: 'prueba texto'
              }
            },
            Subject: {
              Data: 'prueba'
            }
          }
        },
        Destination: {
          ToAddresses: [
            '97.rramirez@gmail.com' /* , 'jolcusuario1@gmail.com' */
          ]
        },
        FromEmailAddress: '97.rramirez@gmail.com'
      })
    } else {
      rediret.push('/api/auth/login')
    }
  }, [sendEmail])

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
                tags={news.tags}
                bagroundColor={news.bagroundColor}
              />
            ))}
          </td>
        </tr>
        <tr>
          <td align="center">
            <Footer />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default SaveHTML
