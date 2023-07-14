import React from 'react'
import Layout from '../../layout'
import TextBoxEditor from '@/components/newsletter/inputs/TextBoxEditor'

const TextHeader = () => {
  return (
    <>
      <Layout>
        <TextBoxEditor name="textHeader" label="" />
      </Layout>
    </>
  )
}

export default TextHeader
