import { TextField } from '@mui/material'
import styles from './colorPicker.module.css'
import { useField } from 'formik'
import styled from '@emotion/styled'
import { colors } from '@/styles/variables'

export const StyledInput = styled(TextField)({
  width: '50%',
  '& .MuiInputBase-root': {
    '&::after': {
      borderBottom: '2px solid var(--primary_yellow)'
    }
  }
})

interface Props {
  label: string
  name: string
}

const ColorPicker = ({ label, name, ...props }: Props) => {
  const [field] = useField(name)
  return (
    <>
      <div className={styles.wrap}>
        <div>{label}</div>
        <StyledInput
          type="text"
          variant="standard"
          size="small"
          fullWidth
          placeholder="#"
          {...field}
        />
        <div
          className={styles.buttonColor}
          style={{
            backgroundColor: field.value || colors.primary_yellow
          }}
        >
          <TextField type="color" sx={{ opacity: 0 }} {...field} />
        </div>
      </div>
    </>
  )
}

export default ColorPicker
