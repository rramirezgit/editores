import HeaderTemplate from '@/components/newsletter/templates/header'
import NewsTemplate from '@/components/newsletter/templates/news'
import { useEffect } from 'react'
import getHtml from './sendDataNewsletter'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/router'
import useAWSSes from '@/hooks/aws/ses'

const SaveHTML = () => {
  const { templates } = useSelector((state: RootState) => state.newsletter)
  const { user } = useUser()
  const rediret = useRouter()
  const { sendEmail } = useAWSSes(
    'AKIAQJ2WKKF33WY36DXY',
    'TONfxtrYNLJuISzGCwTX491ZsQmdRl5PA65Y95cQ',
    'us-west-2'
  )

  useEffect(() => {
    // const styles = document.querySelectorAll('head style')
    // styles.forEach(style => style.remove())
    if (user) {
      const html = getHtml(user)
      console.log(html)
      sendEmail({
        Content: {
          Simple: {
            Body: {
              Html: {
                Data: '<div id="__next"><div id="previwHtml" style="width: 100%; height: max-content; background-color: rgb(246, 247, 251); align-items: center; gap: 1rem; padding: 20px 0px;"><table width="100%" style="border-collapse: separate; border-spacing: 0px 10px;"><tr><td align="center" valign="top"><div style="text-align: center; padding: 20.9331px 16.9075px 27.374px; isolation: isolate; width: 482.27px; height: max-content; border-radius: 12.8819px; box-sizing: border-box; background-color: rgb(255, 255, 255);"><div style="width: 100%; height: 12.88px; display: flex;"><div style="gap: 10px; font-weight: 400; font-size: 7.40682px; line-height: 9px; color: rgb(185, 185, 185); display: flex; width: 110%;"><div>20/12/2023</div><div>#Casi Feliz Navidad</div></div><div style="display: flex; gap: 10px; font-size: 7.59112px; line-height: 9px; color: rgb(41, 57, 78); float: right; width: 50%;"><div style="cursor: pointer;">View Online</div><div style="cursor: pointer;">Sign up</div><div style="cursor: pointer;">Play Games</div></div></div><div style="padding: 16px 0px; width: 100%; height: 156.23px; text-align: center;"><img src="https://adac-development.s3.us-west-2.amazonaws.com/Media/unnamed%20%282%29.png" alt="logo" width="322" height="118" style="display: inline-block; margin: auto;"></div><div style="width: 100%; display: flex; padding: 0px 0px 0px 5%;"><div style="width: 190.01px; height: 4.83px; background: linear-gradient(270deg, rgba(235, 186, 89, 0) 0%, rgb(249, 187, 25) 99.17%);"></div><div style="width: 190.01px; height: 4.83px; background: linear-gradient(90deg, rgba(235, 186, 89, 0) 0%, rgb(249, 187, 25) 99.17%);"></div></div><div style="font-weight: 400; font-size: 19.2607px; line-height: 23px; color: rgb(41, 57, 78); margin-top: 19.36px; text-align: center;">Juntos con:</div><div><img src="https://adac-development.s3.us-west-2.amazonaws.com/Media/spon.png" alt="logo" width="230" height="72"></div></div></td></tr><tr><td align="center"><div style="align-items: center; isolation: isolate; width: 482.27px; height: max-content; border-radius: 12.8819px;"><div class="news_contentTitleHeader__g_t79" style="height: 29px; width: 100%; border-radius: 6.40268px 6.40268px 0px 0px; color: rgb(255, 255, 255); font-weight: 400; font-size: 15.9416px; line-height: 19px; padding: 0px 10px; box-sizing: border-box; display: flex; background: linear-gradient(270deg, rgba(235, 186, 89, 0) 0%, rgb(249, 187, 25) 99.17%);"><p style="margin:5px 0 0 0">texto del header</p></div><div style="height: 241px; width: 100%; background: rgba(167, 167, 167, 0.74); display: flex; justify-content: center; align-items: center;"><img alt="img" height="241" src="https://adac-development.s3.us-west-2.amazonaws.com/Media/nasa%20%283%29.png" width="482" style="object-fit: cover;"></div><div style="isolation: isolate; height: max-content; background: rgb(255, 255, 255); border-radius: 0px 0px 12.8819px 12.8819px; padding: 27px; width: 100%; box-sizing: border-box;"><div class="news_contentTitle__LBlhu" style="font-style: normal; font-weight: 400; font-size: 19.2081px; line-height: 23px; display: flex;"><p>titulo de la noticia</p></div><div style="display: flex; justify-content: space-between; height: 19px; align-items: center;"><div style="display: flex; gap: 15px;"><div style="display: flex; font-size: 7.36281px; line-height: 9px; gap: 10px; color: rgb(185, 185, 185);"><div>25 de julio de 2023</div><div></div></div><div style="display: flex;"></div></div><div style="display: flex; gap: 10px;"><div style="cursor: pointer;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9.25 9.05a8 8 0 0 0 5.5 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86C20.68 3.74 18.95 2 16.82 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86C20.68 3.74 18.95 2 16.82 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div style="cursor: pointer;"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-xtuuzo-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ShareIcon"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path></svg></div></div></div><div style="font-size: 10px; font-weight: 325; line-height: 12px; letter-spacing: 0em; text-align: justify;"><p>loren ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt</p></div></div></div></td></tr></table></div></div><script src="/_next/static/chunks/react-refresh.js?ts=1690326487604"></script><script id="__NEXT_DATA__" type="application/json">{"props":{"pageProps":{}},"page":"/newsletter/saveHtml","query":{},"buildId":"development","nextExport":true,"autoExport":true,"isFallback":false,"scriptLoader":[]}</script><div id="__next-build-watcher" style="position: fixed; bottom: 10px; right: 20px; width: 0px; height: 0px; z-index: 99999;"></div><next-route-announcer><p aria-live="assertive" id="__next-route-announcer__" role="alert" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 1px; white-space: nowrap; overflow-wrap: normal;">/newsletter</p></next-route-announcer><script src="/_next/static/chunks/pages/newsletter/previewHtml.js"></script><script src="/_next/static/chunks/pages/newsletter.js"></script>'
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
          ToAddresses: ['97.rramirez@gmail.com', 'jolcusuario1@gmail.com']
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
                readingTime={news.readingTime}
              />
            ))}
          </td>
        </tr>
      </table>
    </div>
  )
}

export default SaveHTML
