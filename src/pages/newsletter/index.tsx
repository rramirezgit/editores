import React from 'react'
import styles from './newsletter.module.css'
import HeaderTemplate from '@/components/newsletter/templates/header'
import { useDispatch, useSelector } from 'react-redux'
import TemplatesOptions from '@/components/newsletter/templates/templateOptions'
import Addtemplate from '@/components/newsletter/inputs/addtemplate'
import SelectNewsTemplate from '@/components/newsletter/selectNewsTemplate'
import { RootState } from '@/store'
import { setShowSelectTemplate } from '@/store/slices/newsletter'
import NewsTemplate from '@/components/newsletter/templates/news'
import NewsletterForms from '@/components/newsletter/newsletterForms'
import FinishButton from '@/components/newsletter/inputs/finishButton'

const Newsletter = () => {
  const dispatch = useDispatch()
  const {
    templates: {
      header: { haveSponsored, imgSponsored, imgHeader, color, textHeader },
      news
    },
    showSelectTemplate,
    templateIdEditing
  } = useSelector((state: RootState) => state.newsletter)

  const hanldleClickAddTemplate = () => {
    dispatch(setShowSelectTemplate(true))
  }

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        {showSelectTemplate ? (
          <SelectNewsTemplate />
        ) : (
          <NewsletterForms id={templateIdEditing} />
        )}

        {/* <Fab
          variant="extended"
          size="small"
          style={{
            backgroundColor: colors.primary_yellow,
            position: 'absolute',
            bottom: '20px',
            left: '25px'
          }}
          aria-label="add"
        >
          <CardEdit size="20" variant="Outline" />
        </Fab> */}
      </div>
      <div className={styles.preview}>
        <TemplatesOptions from="header" id={'0'}>
          <HeaderTemplate
            color={color}
            Texto={textHeader}
            haveSponsored={haveSponsored}
            logo={imgHeader}
            sponsor={imgSponsored}
          />
        </TemplatesOptions>
        {news.map((item, index) => {
          return (
            <TemplatesOptions key={index} id={item.id}>
              <NewsTemplate
                textHeader={item.textHeader}
                img={item.img}
                title={item.title}
                readingTime={item.readingTime}
                tags={item.tags}
                text={item.text}
                color={item.color}
              />
            </TemplatesOptions>
          )
        })}
        <Addtemplate onClick={hanldleClickAddTemplate} />
        <FinishButton />
      </div>
    </div>
  )
}

export default Newsletter
