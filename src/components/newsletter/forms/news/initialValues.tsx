interface Values {
  textHeader: string
  color: string
  img: string
  title: string
  text: string
  readingTime: string
  tags: string[]
  bagroundColor?: string
}

const initialValues = (values: Values) => {
  return {
    textHeader: values?.textHeader || 'texto del header',
    color: values?.color || '#F9BB19',
    img: values?.img || {
      data: 'https://adac-development.s3.us-west-2.amazonaws.com/Media/logoAdac.png'
    },
    title: values?.title || 'titulo de la noticia',
    text: values?.text || 'loren ipsum',
    readingTime: values?.readingTime || '',
    tags: values?.tags || [],
    bagroundColor: values?.bagroundColor || '#a7a7a7bd'
  }
}

export default initialValues
