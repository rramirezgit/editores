import { UserProfile } from '@auth0/nextjs-auth0/client'

interface EmailData {
  user: UserProfile | undefined
  urlUnsusbcribe?: string
}

export const getHtml = ({ user, urlUnsusbcribe }: EmailData) => {
  let htmlContent = generateHTML()

  htmlContent.replace(/<body[^>]*>((.|[\n\r])*)<\/body>/im, (match, body) => {
    htmlContent = body
    return body
  })

  if (urlUnsusbcribe) {
    htmlContent = htmlContent.replaceAll('{{urlUnsubscribe}}', urlUnsusbcribe)
  }

  if (!user) return ''
  return htmlContent
}

const generateHTML = () => {
  let htmlContent = document.documentElement.outerHTML
  const regex = /<img[^>]+src=["']([^"']+)/g
  htmlContent = htmlContent.replace(regex, (match, src) => {
    return match.replace(src, src.split('?')[0])
  })

  return htmlContent
}

interface cifrarCesarType {
  texto: string
  desplazamiento: number
}

export const cifrarCesar = ({ texto, desplazamiento }: cifrarCesarType) => {
  let resultado = ''

  for (let i = 0; i < texto.length; i++) {
    let charCode = texto.charCodeAt(i)

    if (texto[i] >= 'A' && texto[i] <= 'Z') {
      charCode = ((charCode - 65 + desplazamiento) % 26) + 65
    } else if (texto[i] >= 'a' && texto[i] <= 'z') {
      charCode = ((charCode - 97 + desplazamiento) % 26) + 97
    }

    resultado += String.fromCharCode(charCode)
  }

  return resultado
}

interface descifrarCesarType {
  textoCifrado: string
  desplazamiento: number
}

export const descifrarCesar = ({
  textoCifrado,
  desplazamiento
}: descifrarCesarType) => {
  desplazamiento = 26 - desplazamiento

  return cifrarCesar({ texto: textoCifrado, desplazamiento })
}
