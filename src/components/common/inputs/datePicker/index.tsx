import * as React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { ErrorMessage, useField } from 'formik'
import stylesInput from '../input.module.css'
import styles from './datePicker.module.css'
import { StyledDatePicker } from '../styled'

interface Props {
  name: string
  [x: string]: any
}

export default function DatePicker(props: Props) {
  const [field, , helpers] = useField(props)

  const handleChange = (date: any) => {
    helpers.setValue(date)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.container}>
        <StyledDatePicker
          {...field}
          {...props}
          value={field.value || null}
          onChange={handleChange}
          slotProps={{
            textField: { variant: 'standard' }
          }}
        />
        <ErrorMessage
          name={props.name}
          component="span"
          className={stylesInput.error}
        />
      </div>
    </LocalizationProvider>
  )
}
