import React from 'react'
import { Checkbox } from '@mui/material'
import styles from './checkFormik.module.css'
import { ErrorMessage, useField } from 'formik'

interface Props {
  label: React.ReactNode
  name: string
  [x: string]: any
}

const CheckLabelFormik = ({ label, ...props }: Props) => {
  const [field] = useField(props)
  return (
    <div className={styles.container}>
      <Checkbox
        sx={{ padding: 0, margin: '0px 10px 0px 0px' }}
        {...field}
        {...props}
      />
      {label}
      <ErrorMessage
        name={'TermsConditions'}
        component="span"
        className={styles.error}
      />
    </div>
  )
}

export default CheckLabelFormik
