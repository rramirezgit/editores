import { Checkbox, FormControlLabel } from '@mui/material'
import { useField } from 'formik'
import React from 'react'

interface Props {
  name: string
  label: string
}

const Check = ({ name, label }: Props) => {
  const [field] = useField(name)
  return (
    <FormControlLabel
      control={
        <Checkbox
          color="success"
          checked={field.value}
          onChange={field.onChange}
          name={name}
        />
      }
      label={label}
      style={{
        margin: '1rem 0px'
      }}
    />
  )
}

export default Check
