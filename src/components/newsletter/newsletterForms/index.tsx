import HeaderForm from '../forms/header'
import NewsForm from '../forms/news'
import { useState, useEffect } from 'react'

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
    }
  }, [id])

  switch (type) {
    case 'header':
      return <HeaderForm />
    case 'news':
      return <NewsForm id={id} />
    default:
      return (
        <>
          <h1>Default</h1>
        </>
      )
  }
}

export default NewsletterForms
