import BasicTabs from '@/components/common/BasicTabs'
import { TextalignLeft, Brush2, Gallery, Link1 } from 'iconsax-react'
import React from 'react'
import TextHeader from './text'
import ImgHeader from './img'
import ColorsHeader from './color'
import UrlSocialMedia from './url'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPublicityValuesByid } from '@/store/slices/newsletter'
import { RootState } from '@/store'

interface PublicityOptionsProps {
  values: any
  id: string
}

const PublicityOptions = ({ values, id }: PublicityOptionsProps) => {
  const [value, setValue] = React.useState(0)
  const dispatch = useDispatch()
  const { loadImages } = useSelector((state: RootState) => state.newsletter)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (value === 2 && loadImages) {
      alert('Tiene una edición de imagen en proceso')
      return
    }
    setValue(newValue)
  }

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
    dispatch(setPublicityValuesByid({ ...dataValues, id }))
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
        },
        {
          index: 3,
          icon: <Link1 size="20" />
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
        },
        {
          index: 3,
          Panel: UrlSocialMedia
        }
      ]}
      value={value}
      handleChange={handleChange}
    />
  )
}

export default PublicityOptions
