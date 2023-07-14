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
        <DropZone label="Imagen de encabezado" name="img" />
      </Layout>
    </>
  )
}

export default ImgHeader
