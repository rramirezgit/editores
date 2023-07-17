import { store } from '@/store'
import Theme from '@/styles/GlobalMui'
import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import AWS from 'aws-sdk'

// Configurar las credenciales de AWS
AWS.config.update({
  accessKeyId: 'AKIAQJ2WKKF3WMUV4W63',
  secretAccessKey: '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',
  region: 'us-west-2'
})

// Crear una instancia del cliente de AWS S3
export const s3Client = new AWS.S3()

// Nombre del bucket de S3
const bucketName = 'adac-development'

// Obtener la lista de objetos en el bucket
s3Client.listObjects({ Bucket: bucketName }, (err, data) => {
  if (err) {
    console.log('Error:', err)
  } else {
    console.log('Objetos en el bucket:')
    if (data?.Contents === undefined)
      return console.log('No hay objetos en el bucket')

    data?.Contents.forEach(obj => {
      console.log(obj.Key)
    })
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Theme>
  )
}
