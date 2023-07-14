import { RootState } from '@/store'
import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
interface Props {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  const [title, setTitle] = useState('')
  const {
    templateIdEditing,
    templates: { news }
  } = useSelector((state: RootState) => state.newsletter)

  useEffect(() => {
    if (templateIdEditing === '0') {
      setTitle('Encabezado')
    } else if (templateIdEditing.includes('news')) {
      news.forEach((item: any) => {
        if (item.id === templateIdEditing) {
          if (item.title === '') {
            setTitle('Noticia')
          } else {
            setTitle(item.title)
          }
        }
      })
    }
  }, [templateIdEditing])
  return (
    <div style={{ height: 'max', width: '100%' }}>
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          mb: '20px',
          '& > p': {
            margin: '0'
          }
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      ></Typography>
      {children}
    </div>
  )
}

export default Layout
