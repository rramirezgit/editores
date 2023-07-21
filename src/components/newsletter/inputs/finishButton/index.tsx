import { SpeedDial, SpeedDialAction } from '@mui/material'
import { Eye, Lock, Send2, Setting, DirectSend } from 'iconsax-react'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0/client'

const FinishButton = () => {
  const router = useRouter()
  const { user } = useUser()

  const handleClickPreview = () => {
    router.push('/newsletter/previewHtml')
  }

  const handleClickTest = () => {
    if (!user) router.push('/api/auth/login')
    alert(user?.email)
  }

  const handleClickSave = () => {
    router.push('/newsletter/saveHtml')
  }

  const actions = [
    { icon: <Send2 />, name: 'Enviar', onClick: handleClickPreview },
    { icon: <Eye />, name: 'Previsualizar', onClick: handleClickPreview },
    { icon: <Lock />, name: 'Probar', onClick: handleClickTest },
    { icon: <DirectSend />, name: 'Guardar', onClick: handleClickSave }
  ]

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
          onClick={action.onClick}
        />
      ))}
    </SpeedDial>
  )
}

export default FinishButton
