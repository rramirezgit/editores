import React from 'react'
import Layout from '../../layout'
import DropZone from '@/components/newsletter/inputs/dropZone'

const ImgHeader = () => {
  return (
    <>
      <Layout>
        <DropZone label="Imagen de encabezado" name="img" />
      </Layout>
    </>
  )
}

export default ImgHeader
