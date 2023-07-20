import JSZip from 'jszip'
import { saveAs } from 'file-saver'

const handleDownload = () => {
  const zip = new JSZip()

  // Obtener el contenido HTML y CSS del componente
  const htmlContent = generateHTML()
  // const cssContent = generateCSS()

  // Agregar el archivo index.html al ZIP
  zip.file('index.html', htmlContent)

  zip.generateAsync({ type: 'blob' }).then(content => {
    saveAs(content, 'componente.zip')
  })
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

export default handleDownload
