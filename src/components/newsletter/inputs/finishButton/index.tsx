import { SpeedDial, SpeedDialAction } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import ShareIcon from '@mui/icons-material/Share'
import { Html5, Setting } from 'iconsax-react'
import { useRouter } from 'next/router'

const actions = [
  { icon: <SaveIcon />, name: 'Guardar' },
  { icon: <Html5 />, name: 'Descargar html' },
  { icon: <ShareIcon />, name: 'Compartir' }
]

const FinishButton = () => {
  const router = useRouter()

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<Setting size="25" />}
      FabProps={{
        sx: {
          bgcolor: '#29394E',
          '&:hover': {
            bgcolor: '#29394E'
          }
        }
      }}
    >
      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => {
            // if (action.name === 'Descargar html') {
            //   window.open('/newsletter/previewHtml', '_blank')
            // }
            router.push('/newsletter/previewHtml')
          }}
        />
      ))}
    </SpeedDial>
  )
}

export default FinishButton
