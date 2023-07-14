import { ErrorMessage, useField } from 'formik'
import { StyledInput } from '../styled'
import styles from '../input.module.css'
import PasswordValidation from './passwordValidation'
import { IconButton } from '@mui/material'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'

interface Props {
  name: string
  type?: 'text' | 'email' | 'password' | 'date'
  placeholder?: string
  showError?: boolean
  [x: string]: any
}

export const TextInput = ({ showError = true, ...props }: Props) => {
  const [field] = useField(props)
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <StyledInput
        {...field}
        {...props}
        type={showPassword ? 'text' : props.type}
        InputProps={
          props.type === 'password'
            ? {
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                )
              }
            : undefined
        }
      />

      {showError ? (
        <ErrorMessage
          name={props.name}
          component="span"
          className={styles.error}
        />
      ) : (
        <PasswordValidation field={field} />
      )}
    </div>
  )
}
