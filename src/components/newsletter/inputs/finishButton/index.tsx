import { Alert, SpeedDial, SpeedDialAction } from '@mui/material'
import {
  Eye,
  Lock,
  Send2,
  Setting,
  DirectSend,
  LogoutCurve
} from 'iconsax-react'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { getHtml } from '@/hooks/sendDataNewsletter'
import useAWSSes from '@/hooks/aws/ses'

const FinishButton = () => {
  const router = useRouter()
  const { user } = useUser()
  const { loadImages } = useSelector((state: RootState) => state.newsletter)
  const { sendEmail } = useAWSSes(
    process.env.NEXT_PUBLIC_AWS_CLIENT_ACCESS_KEY_ID as string,
    process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
    process.env.NEXT_PUBLIC_AWS_REGION as string
  )

  const handleClickSendToSubcriptions = () => {
    if (loadImages) {
      alert('Tiene una edición de imagen en proceso')
      return
    }
    router.push('/newsletter/saveHtml')
  }

  const handleClickPreview = () => {
    if (loadImages) {
      alert('Tiene una edición de imagen en proceso')
      return
    }
    router.push('/newsletter/previewHtml')
  }

  const handleClickTest = () => {
    if (loadImages) {
      alert('Tiene una edición de imagen en proceso')
      return
    }
    if (!user) router.push('/api/auth/login')
    const email = prompt('Ingrese el correo a enviar')
    const regex = /\S+@\S+\.\S+/
    if (!regex.test(email as string)) {
      alert('Correo invalido')
      return
    }
    if (email) {
      router.push('/newsletter/saveHtml/' + email)
    }
  }

  const handleClickSave = () => {
    if (loadImages) {
      alert('Tiene una edición de imagen en proceso')
      return
    }
    router.push('/newsletter/saveHtml')
  }

  const actions = [
    {
      icon: <LogoutCurve />,
      name: 'Salir',
      onClick: () => {
        router.push('/api/auth/logout')
      }
    },
    {
      icon: <Send2 />,
      name: 'Enviar a Subscriptores',
      onClick: handleClickSendToSubcriptions
    },
    { icon: <Eye />, name: 'Previsualizar', onClick: handleClickPreview },
    { icon: <Lock />, name: 'Probar', onClick: handleClickTest }
    // { icon: <DirectSend />, name: 'Guardar', onClick: handleClickSave }
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
