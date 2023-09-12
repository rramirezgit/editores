import HeaderForm from '../forms/header'
import NewsForm from '../forms/news'
import { useState, useEffect } from 'react'
import PublicityForm from '../forms/publicity'

interface NewsletterFormsProps {
  id: string
}

const NewsletterForms = ({ id }: NewsletterFormsProps) => {
  const [type, setType] = useState<string>('header')

  useEffect(() => {
    if (id === '0') {
      setType('header')
    } else if (id.includes('news')) {
      setType('news')
    } else if (id.includes('publicity')) {
      setType('publicity')
    }
  }, [id])

  switch (type) {
    case 'header':
      return <HeaderForm />
    case 'news':
      return <NewsForm id={id} />
    case 'publicity':
      return <PublicityForm id={id} />
    default:
      return (
        <>
          <h1>Default</h1>
        </>
      )
  }
}

export default NewsletterForms
