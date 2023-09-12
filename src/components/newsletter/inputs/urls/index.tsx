/* eslint-disable @next/next/no-img-element */
import { Box, TextField } from '@mui/material'
import { useField } from 'formik'
import React from 'react'

interface UrlInputProps {
  name: string
  iconHref: string
}

const UrlInput = ({ name, iconHref }: UrlInputProps) => {
  const [field, , helpers] = useField(name)
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '10px' }}>
      <img
        src={iconHref}
        alt="img"
        width={28}
        height={28}
        style={{
          backgroundColor: 'rgb(164, 224, 227)',
          padding: '5px',
          borderRadius: '5px',
          marginRight: '10px'
        }}
      />
      <TextField
        id="input-with-sx"
        label={name}
        variant="standard"
        value={field.value}
        onChange={e => {
          helpers.setValue(e.target.value)
        }}
      />
    </Box>
  )
}

export default UrlInput
