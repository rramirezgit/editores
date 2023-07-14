import React from 'react'
import Layout from '../../layout'
import TextBoxEditor from '@/components/newsletter/inputs/TextBoxEditor'

const TextHeader = () => {
  return (
    <>
      <Layout>
        <TextBoxEditor
          name="textHeader"
          height="8vh"
          label={'Texto del header'}
        />
        <TextBoxEditor
          name="title"
          height="10vh"
          label={'Titulo de la noticia'}
        />
        <TextBoxEditor
          name="text"
          height="40vh"
          label={'Texto del contenido'}
        />
      </Layout>
    </>
  )
}

export default TextHeader
