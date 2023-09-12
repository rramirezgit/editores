import HeaderTemplate from '@/components/newsletter/templates/header'
import NewsTemplate from '@/components/newsletter/templates/news'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { IconButton } from '@mui/material'
import { Back } from 'iconsax-react'
import { useRouter } from 'next/router'
import Footer from '@/components/newsletter/templates/footer'
import PublicityTemplate from '@/components/newsletter/templates/publicity'

const PreviewHtml = () => {
  const { templates } = useSelector((state: RootState) => state.newsletter)
  const router = useRouter()

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
      <div
        style={{
          position: 'fixed'
        }}
      >
        <IconButton
          onClick={() => {
            router.push('/newsletter')
          }}
        >
          <Back size="32" />
        </IconButton>
      </div>
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
              <NewsTemplate key={index} {...news} />
            ))}
            {templates.publicity.map((publicity, index) => (
              <PublicityTemplate key={index} {...publicity} />
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

export default PreviewHtml
