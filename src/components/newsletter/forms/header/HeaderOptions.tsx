import BasicTabs from '@/components/common/BasicTabs'
import { TextalignLeft, Brush2, Gallery } from 'iconsax-react'
import React from 'react'
import TextHeader from './text'
import ImgHeader from './img'
import ColorsHeader from './color'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setTemplateValues } from '@/store/slices/newsletter'

const HeaderOptions = ({ values }: any) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTemplateValues(values))
  }, [values])

  return (
    <BasicTabs
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

export default HeaderOptions
