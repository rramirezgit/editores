import * as yup from 'yup'

const validationSchema = () =>
  yup.object({
    textHeader: yup.string().required('required'),
    color: yup.string().required('required'),
    imgHeader: yup.string().required('required'),
    imgSponsored: yup.string().required('required')
  })

export default validationSchema
