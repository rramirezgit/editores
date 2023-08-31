import React from 'react'
import Layout from '../../layout'
import DropZone from '@/components/newsletter/inputs/dropZone'
import Check from '@/components/newsletter/inputs/check'
import { useSelector } from 'react-redux'

const ImgHeader = () => {
  const { haveSponsored } = useSelector(
    (state: any) => state.newsletter.templates.header
  )

  return (
    <>
      <Layout>
        <Check name="haveSponsored" label="Agregar patrocinador" />
        {haveSponsored && (
          <DropZone label="Imagen de encabezado" name="imgSponsored" />
        )}
      </Layout>
    </>
  )
}

export default ImgHeader
