import { Formik } from 'formik'
import React from 'react'
import initialValues from './initialValues'
import validationSchema from './validationSchema'
import NewsOptions from './newsOptions'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

interface NewsFormProps {
  id: string
}

const NewsForm = ({ id }: NewsFormProps) => {
  const {
    templates: { news }
  } = useSelector((state: RootState) => state.newsletter)
  const inialValuesForm = initialValues(news.find(item => item.id === id))
  const validationSchemaForm = validationSchema()
  return (
    <Formik
      initialValues={inialValuesForm}
      onSubmit={values => {
        console.log(values)
      }}
      validationSchema={validationSchemaForm}
    >
      {({ values }) => {
        return (
          <>
            <NewsOptions values={values} id={id} />
          </>
        )
      }}
    </Formik>
  )
}

export default NewsForm
