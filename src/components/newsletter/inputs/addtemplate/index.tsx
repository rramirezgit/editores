import { colors } from '@/styles/variables'
import { IconButton, Tooltip } from '@mui/material'
import { AddCircle } from 'iconsax-react'
import React from 'react'

interface AddtemplateProps {
  onClick: () => void
}

const Addtemplate = ({ onClick }: AddtemplateProps) => {
  return (
    <Tooltip
      title="Agregar template"
      placement="bottom"
      sx={{ m: '0 0 40px', left: -30 }}
    >
      <IconButton onClick={onClick}>
        <AddCircle size="50" color={colors.gray} variant="Bulk" />
      </IconButton>
    </Tooltip>
  )
}

export default Addtemplate
