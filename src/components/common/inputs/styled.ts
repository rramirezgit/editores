import styled from '@emotion/styled'
import { Button, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'

export const StyledButton = styled(Button)({
  width: '100%',
  height: '42px',
  background: 'var(--primary_blue)',
  color: 'var(--white)',
  '&:hover': {
    background: 'var(--primary_blue)'
  }
})

export const StyledInput = styled(TextField)({
  width: '100%',
  '& .MuiInputBase-root': {
    height: '42px',
    '&::after': {
      borderBottom: '2px solid var(--primary_blue)'
    }
  }
})

export const StyledDatePicker = styled(DatePicker)({
  width: '100%',
  '& .MuiInputBase-root': {
    height: '42px',
    '&::after': {
      borderBottom: '2px solid var(--primary_blue)'
    }
  }
})
