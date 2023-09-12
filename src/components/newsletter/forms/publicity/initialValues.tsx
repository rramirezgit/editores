interface Values {
  textHeader: string
  color: string
  img: string
  title: string
  text: string
  readingTime: string
  tags: string[]
  bagroundColor?: string
  Facebook?: string
  Instagram?: string
  Twitter?: string
  Linkedin?: string
  Tiktok?: string
  socialMediasColor?: string
}

const initialValues = (values: Values) => {
  return {
    textHeader: values?.textHeader || 'texto del header',
    color: values?.color || '#F9BB19',
    img: values?.img || {
      data: 'https://adac-development.s3.us-west-2.amazonaws.com/Media/logoAdac.png'
    },
    title: values?.title || 'Titulo',
    text: values?.text || 'loren ipsum',
    readingTime: values?.readingTime || '',
    tags: values?.tags || [],
    bagroundColor: values?.bagroundColor || '#a7a7a7bd',
    Facebook: values?.Facebook || undefined,
    Instagram: values?.Instagram || undefined,
    Twitter: values?.Twitter || undefined,
    Linkedin: values?.Linkedin || undefined,
    Tiktok: values?.Tiktok || undefined,
    socialMediasColor: values?.socialMediasColor || '#39C0CC'
  }
}

export default initialValues
