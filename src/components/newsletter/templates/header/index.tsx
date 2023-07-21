/* eslint-disable @next/next/no-img-element */
import stringStyle from '@/components/newsletter/templates/header/stringStyles'

interface props {
  color?: string
  Texto?: any
  haveSponsored?: boolean
  logo: {
    path: string
    data: string
  }
  sponsor?: {
    path: string
    data: string
  }
}

const HeaderTemplate = ({
  color,
  Texto,
  haveSponsored,
  logo,
  sponsor
}: props) => {
  return (
    <>
      <div
        style={{
          ...stringStyle.header_template_content
        }}
      >
        <div style={stringStyle.header_template_dataHeader}>
          <div style={stringStyle.header_template_dataHeaderLeft}>
            <div>20/12/2023</div>
            <div>#Casi Feliz Navidad</div>
          </div>
          <div style={stringStyle.header_template_dataHeaderR}>
            <div style={stringStyle.header_template_dataHeaderRData}>
              View Online
            </div>
            <div style={stringStyle.header_template_dataHeaderRData}>
              Sign up
            </div>
            <div style={stringStyle.header_template_dataHeaderRData}>
              Play Games
            </div>
          </div>
        </div>
        <div style={stringStyle.header_template_contentImg}>
          <img
            src={logo.data}
            alt="logo"
            width={322}
            height={118}
            style={stringStyle.header_img}
          />
        </div>
        <div style={stringStyle.header_template_contentHr}>
          <div
            style={{
              ...stringStyle.header_template_hrL,
              background: `linear-gradient(270deg, rgba(235, 186, 89, 0) 0%, ${color} 99.17%)`
            }}
          ></div>
          <div
            style={{
              ...stringStyle.header_template_hrR,
              background: `linear-gradient(90deg, rgba(235, 186, 89, 0) 0%, ${color} 99.17%)`
            }}
          ></div>
        </div>
        {haveSponsored && (
          <>
            <div
              style={{
                ...stringStyle.header_template_togetherWith,
                textAlign: 'center'
              }}
            >
              Juntos con:
            </div>
            {sponsor && sponsor.data !== '' && (
              <div>
                <img src={sponsor?.data} alt="logo" width={230} height={72} />
              </div>
            )}
          </>
        )}
        {Texto && Texto !== '<p><br></p>' && (
          <div
            dangerouslySetInnerHTML={{ __html: Texto }}
            style={stringStyle.header_template_texto}
          />
        )}
      </div>
    </>
  )
}

export default HeaderTemplate
