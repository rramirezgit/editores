import React from 'react'
import { Checkbox } from '@mui/material'
import styles from './checkLabel.module.css'

interface Props {
  label: React.ReactNode
  [x: string]: any
}

const CheckLabel = ({ label, ...props }: Props) => {
  return (
    <div className={styles.rememberMe}>
      <Checkbox sx={{ padding: 0, margin: '0px 10px 0px 0px' }} {...props} />
      {label}
    </div>
  )
}

export default CheckLabel
