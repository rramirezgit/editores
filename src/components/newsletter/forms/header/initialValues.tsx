const initialValues = (values: any) => {
  return {
    textHeader: values?.textHeader || '',
    color: values?.color || '#F9BB19',
    haveSponsored: values?.haveSponsored || true,
    imgHeader: values?.imgHeader || {
      data: 'https://adac-development.s3.us-west-2.amazonaws.com/Media/logoAdac.png',
      path: 'logo_ADAC_Horizontal.svg'
    },
    imgSponsored: values?.imgSponsored || {
      data: 'https://adac-development.s3.us-west-2.amazonaws.com/Media/spon.png',
      path: 'SimpliSafe_logo.svg'
    },
    id: 0
  }
}

export default initialValues
