import { UserProfile } from '@auth0/nextjs-auth0/client'
import { s3Client } from '@/pages/newsletter'

const generateUniqueId = () => {
  const timestamp = new Date().getTime()
  const random = Math.random().toString(36).substring(2)
  return `${timestamp}-${random}`
}

const sendDataNewsletter = (user: UserProfile | undefined) => {
  let htmlContent = generateHTML()

  /// recorrer htmlContent y solo guardar la eqtiqueta <body> y su contenido

  htmlContent.replace(/<body[^>]*>((.|[\n\r])*)<\/body>/im, (match, body) => {
    htmlContent = body
    return body
  })

  if (!user) return
  const data = {
    name: user?.name,
    email: user?.email,
    template: htmlContent,
    date: new Date(),
    id: generateUniqueId()
  }

  s3Client.upload(
    {
      Bucket: 'adac-development/Newsletter',
      ContentType: 'application/json',
      Key: data.id,
      Body: JSON.stringify(data)
    },
    (err: any, data: any) => {
      if (err) {
        console.log(err)
      }
      console.log(data)
    }
  )
}

const generateHTML = () => {
  let htmlContent = document.documentElement.outerHTML

  // Utilizar una expresión regular para obtener el valor del atributo src de las etiquetas img
  const regex = /<img[^>]+src=["']([^"']+)/g
  htmlContent = htmlContent.replace(regex, (match, src) => {
    return match.replace(src, src.split('?')[0]) // Remover cualquier query string después del URL
  })

  return htmlContent
}

export default sendDataNewsletter
