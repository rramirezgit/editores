import HeaderTemplate from '@/components/newsletter/templates/header'
import NewsTemplate from '@/components/newsletter/templates/news'
import { useEffect } from 'react'
import { cifrarCesar, getHtml } from '../../../hooks/sendDataNewsletter'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/router'
import useAWSSes from '@/hooks/aws/ses'
import Footer from '@/components/newsletter/templates/footer'
import { getSubcription } from '@/services/newsletter'

const SaveHTML = () => {
  const { templates } = useSelector((state: RootState) => state.newsletter)
  const { user } = useUser()
  const rediret = useRouter()
  const { sendEmail } = useAWSSes(
    process.env.NEXT_PUBLIC_AWS_CLIENT_ACCESS_KEY_ID as string,
    process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
    process.env.NEXT_PUBLIC_AWS_REGION as string
  )

  const sendNewsletterToSubcriptions = () => {
    getSubcription('107748598423260139495')
      .then(res => {
        if (res?.data?.data?.length) {
          let urlUnsusbcribe = ''
          let html = ''
          res.data.data.forEach((item: { id: string; email: string }) => {
            if (item.email !== '97.rramirez@gmail.com') {
              return
            }

            urlUnsusbcribe =
              process.env.NEXT_PUBLIC_FRONTEND_URL +
              '/unsubscribe/' +
              item.id +
              '/' +
              cifrarCesar({ texto: item.email, desplazamiento: 3 })

            html = getHtml({ user, urlUnsusbcribe })

            sendEmail({
              Content: {
                Simple: {
                  Body: {
                    Html: {
                      Data: html
                    },
                    Text: {
                      Data: 'prueba Newsletter'
                    }
                  },
                  Subject: {
                    Data: 'prueba  ADAC 👷🚧😉'
                  }
                }
              },
              Destination: {
                ToAddresses: [
                  '97.rramirez@gmail.com',
                  'jolcusuario1@gmail.com',
                  'rafamusi@adac.mx',
                  'enggechavarriaperiodista@gmail.com'
                ]
              },
              FromEmailAddress: '97.rramirez@gmail.com'
            })
          })
          setTimeout(() => {
            rediret.push('/newsletter')
          }, 2000)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    if (rediret.query.email?.length) {
      const html = getHtml({ user })

      sendEmail({
        Content: {
          Simple: {
            Body: {
              Html: {
                Data: html
              },
              Text: {
                Data: 'prueba Newsletter'
              }
            },
            Subject: {
              Data: 'prueba  ADAC 👷🚧😉'
            }
          }
        },
        Destination: {
          ToAddresses: [rediret.query.email[0] as string]
        },
        FromEmailAddress: '97.rramirez@gmail.com'
      })
      setTimeout(() => {
        rediret.push('/newsletter')
      }, 2000)
    } else {
      if (user) {
        sendNewsletterToSubcriptions()
      } else {
        rediret.push('/api/auth/login')
      }
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
                htmlEmail={true}
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
