import BasicTabs from '@/components/common/BasicTabs'
import { TextalignLeft, Brush2, Gallery } from 'iconsax-react'
import React from 'react'
import TextHeader from './text'
import ImgHeader from './img'
import ColorsHeader from './color'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setNewsValuesByid } from '@/store/slices/newsletter'

interface NewsOptionsProps {
  values: any
  id: string
  submitForm: () => void
}

const NewsOptions = ({ values, id, submitForm }: NewsOptionsProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const dataValues = {
      ...values
    }
    if (dataValues.textHeader) {
      dataValues.textHeader = dataValues.textHeader.replaceAll(
        '<p>',
        `<p style="margin:5px 0 0 0">`
      )
    }
    dispatch(setNewsValuesByid({ ...dataValues, id }))
  }, [values])

  return (
    <BasicTabs
      submitForm={submitForm}
      tabs={[
        {
          index: 0,
          icon: <TextalignLeft size="20" variant="Broken" />
        },
        {
          index: 1,
          icon: <Brush2 size="20" />
        },
        {
          index: 2,
          icon: <Gallery size="20" variant="Outline" />
        }
      ]}
      tabPanels={[
        {
          index: 0,
          Panel: TextHeader
        },
        {
          index: 1,
          Panel: ColorsHeader
        },
        {
          index: 2,
          Panel: ImgHeader
        }
      ]}
    />
  )
}

export default NewsOptions
