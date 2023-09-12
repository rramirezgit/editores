import { Formik } from 'formik'
import React from 'react'
import initialValues from './initialValues'
import validationSchema from './validationSchema'
import PublicityOptions from './PublicityOptions'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

interface PublicityFormProps {
  id: string
}

const PublicityForm = ({ id }: PublicityFormProps) => {
  const {
    templates: { publicity }
  } = useSelector((state: RootState) => state.newsletter)

  const inialValuesForm = initialValues(publicity.find(item => item.id === id))
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
            <PublicityOptions values={values} id={id} />
          </>
        )
      }}
    </Formik>
  )
}

export default PublicityForm
