const initialValues = (values: any) => {
  return {
    textHeader: values?.textHeader || '',
    color: values?.color || '#F9BB19',
    haveSponsored: values?.haveSponsored || true,
    imgHeader: values?.imgHeader || {
      data: 'https://storage.mlcdn.com/account_image/421950/gdYZxKgNWogvwZ9aZ2Qmjg5WeLeIkOB3aZhSMZta.png',
      path: 'logo_ADAC_Horizontal.svg'
    },
    imgSponsored: values?.imgSponsored || {
      data: 'https://storage.mlcdn.com/account_image/421950/xXboKiEuvfD6VxLTby08V8nghsrxY58h00YLZi3w.png',
      path: 'SimpliSafe_logo.svg'
    },
    id: 0
  }
}

export default initialValues
