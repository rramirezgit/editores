import { Formik } from 'formik'
import React, { useEffect } from 'react'
import initialValues from './initialValues'
import validationSchema from './validationSchema'
import NewsOptions from './newsOptions'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

interface NewsFormProps {
  id: string
}

const NewsForm = ({ id }: NewsFormProps) => {
  const [valuesState, setValues] = React.useState({} as any)

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
      {({ values, submitForm }) => {
        // console.log({ values })
        return (
          <>
            <NewsOptions values={values} id={id} submitForm={submitForm} />
          </>
        )
      }}
    </Formik>
  )
}

export default NewsForm
