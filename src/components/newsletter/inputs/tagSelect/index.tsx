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
  { id: 1, label: 'option 1' },
  { id: 2, label: 'option 2' },
  { id: 3, label: 'option 3' },
  { id: 4, label: 'option 4' },
  { id: 5, label: 'option 5' },
  { id: 6, label: 'option 6' },
  { id: 7, label: 'option 7' },
  { id: 8, label: 'option 8' },
  { id: 9, label: 'option 9' },
  { id: 10, label: 'option 10' },
  { id: 11, label: 'option 11' },
  { id: 12, label: 'option 12' },
  { id: 13, label: 'option 13' },
  { id: 14, label: 'option 14' }
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
