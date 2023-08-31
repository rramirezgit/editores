import * as React from 'react'
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { useField } from 'formik'

interface Option {
  label: string
  id: number
}
const options: Option[] = [
  { id: 1, label: 'CIBERATAQUES' },
  { id: 2, label: 'FINTECH' },
  { id: 3, label: 'CIBERSEGURIDAD' },
  { id: 4, label: 'LEYMICA' },
  { id: 5, label: 'TECNOLOGIA' },
  { id: 6, label: 'ECONOMIA' },
  { id: 7, label: 'INNOVACION' },
  { id: 8, label: 'BITCOIN' },
  { id: 9, label: 'CRYPTOMONEDAS' },
  { id: 10, label: 'BLOCKCHAIN' },
  { id: 11, label: 'DEFI' },
  { id: 12, label: 'NFT' },
  { id: 13, label: 'FINANZAS' },
  { id: 14, label: 'BANCA' }
]

interface Props {
  name: string
}
const TagSelect = ({ name }: Props) => {
  const [field, , helpers] = useField(name)
  return (
    <Autocomplete
      color="warning"
      multiple
      id="fixed-tags-demo"
      value={field.value}
      onChange={(event, newValue: any) => {
        helpers.setValue([...newValue])
      }}
      options={options}
      getOptionLabel={option => option.label}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option: any, index: number) => (
          // eslint-disable-next-line react/jsx-key
          <Chip label={option.label} {...getTagProps({ index })} />
        ))
      }
      style={{ width: '100%' }}
      renderInput={params => (
        <TextField {...params} label="Tags" color="warning" placeholder="Tag" />
      )}
    />
  )
}

export default TagSelect
