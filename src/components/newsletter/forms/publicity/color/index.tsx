import React from 'react'
import Layout from '../../layout'
import ColorPicker from '@/components/newsletter/inputs/colorPicker'
import styles from './color.module.css'

const ColorsHeader = () => {
  return (
    <>
      <Layout>
        <div className={styles.content}>
          <ColorPicker label="Titulo" name="color" />
          <ColorPicker label="Redes Sociales" name="socialMediasColor" />
        </div>
      </Layout>
    </>
  )
}

export default ColorsHeader
