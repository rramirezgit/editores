import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import ClearIcon from '@mui/icons-material/Clear'
import styles from './passwordValidation.module.css'
import { FieldInputProps } from 'formik'

interface Props {
  field: FieldInputProps<any>
}

const PasswordValidation = ({ field }: Props) => {
  const checkLength = (password: any) => {
    if (password.length >= 8) {
      return <CheckIcon className={styles.iconSucces} />
    } else {
      return <ClearIcon className={styles.iconError} />
    }
  }

  const checkNumber = (password: any) => {
    if (/\d/.test(password)) {
      return <CheckIcon className={styles.iconSucces} />
    } else {
      return <ClearIcon className={styles.iconError} />
    }
  }

  const checkSpecial = (password: any) => {
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return <CheckIcon className={styles.iconSucces} />
    } else {
      return <ClearIcon className={styles.iconError} />
    }
  }
  return (
    <div className={styles.infoContainer}>
      <div className={styles.info}>
        {checkLength(field.value)}
        <div className={styles.text}>{'Mínimo 8 caracteres'}</div>
      </div>
      <div className={styles.info}>
        {checkNumber(field.value)}
        <div className={styles.text}>{'Debe contener al menos un número'}</div>
      </div>
      <div className={styles.info}>
        {checkSpecial(field.value)}
        <div className={styles.text}>{'Caracter especial (!,@,#,$,ect)'}</div>
      </div>
    </div>
  )
}

export default PasswordValidation
