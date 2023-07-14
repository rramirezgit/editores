import React from 'react'
import { Checkbox } from '@mui/material'
import styles from './checkLabel.module.css'

interface Props {
  label: React.ReactNode
}

const CheckLabel = ({ label }: Props) => {
  return (
    <div className={styles.rememberMe}>
      <Checkbox sx={{ padding: 0, margin: '0px 10px 0px 0px' }} />
      {label}
    </div>
  )
}

export default CheckLabel
