import Image from 'next/image'
import styles from './unsubscribe.module.css'
import logo from '@/assets/logo.svg'
import { Button } from '@mui/material'
import { useState } from 'react'
import { api } from '../newsletter'
import { useRouter } from 'next/router'
import { descifrarCesar } from '../../hooks/sendDataNewsletter'

const text = {
  subscribe: {
    title:
      '¡Espera un momento! Antes de irte, queremos asegurarnos de que estás tomando la decisión correcta.',
    info: `¿Estás seguro de que quieres perderte las últimas noticias y
    tendencias innovadoras que podrían cambiar tu mundo? Si decides
    quedarte, prometemos seguir trabajando para brindarte el contenido
    más relevante y emocionante. ¿Realmente deseas desuscribirte?`
  },
  unsubscribe: {
    title: '¡Nos entristece mucho que te vayas!',
    info: 'Si cambias de opinión, siempre estarás bienvenido a volver y unirte a nosotros para seguir explorando las últimas innovaciones. Recuerda, el futuro siempre está a un clic de distancia. ¡Hasta la próxima!'
  }
}

interface ButtonStyleProps {
  title: string
  onclick: () => void
  white?: boolean
}

const ButtonStyle = ({ title, onclick, white }: ButtonStyleProps) => {
  return (
    <Button
      variant="contained"
      onClick={onclick}
      sx={{
        '&:hover': {
          backgroundColor: white ? '#fff' : '#39C0CC'
        },
        backgroundColor: white ? '#fff' : '#39C0CC',
        color: white ? '#39C0CC' : '#fff',
        borderRadius: '4px',
        maxWidth: '205px',
        width: '100%'
      }}
    >
      {title}
    </Button>
  )
}

const Unsubscribe = () => {
  const [unsubscribe, setunsubscribe] = useState(false)
  const router = useRouter()

  const handleClickUnsubscribe = () => {
    setunsubscribe(true)

    if (router.query?.user) {
      const dataEmail = descifrarCesar({
        textoCifrado: router.query.user[1] as string,
        desplazamiento: 3
      })
      alert(dataEmail)
    }

    // api.delete(`/unsubscribe/${router.query[0]} `, {
    //   data: dataEmail
    // })
  }

  return (
    <div className={styles.bg}>
      <nav className={styles.nav}>
        <Image src={logo} className={styles.logo} alt="Picture of the author" />
      </nav>
      <section className={styles.body}>
        <div className={styles.contentdata}>
          <div className={styles.title}>
            {unsubscribe ? text.unsubscribe.title : text.subscribe.title}
          </div>
          <div className={styles.text}>
            {unsubscribe ? text.unsubscribe.info : text.subscribe.info}
          </div>
          {!unsubscribe && (
            <div className={styles.buttons}>
              <ButtonStyle
                title="Aceptar"
                onclick={() => handleClickUnsubscribe()}
                white
              />
              <ButtonStyle
                title="Cancelar"
                onclick={() => setunsubscribe(false)}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Unsubscribe
