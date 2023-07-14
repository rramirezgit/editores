import { useField } from 'formik'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import 'react-quill/dist/quill.snow.css'

interface props {
  name: string
  height?: string
  label: string
}

const TextBoxEditor = ({ name, height = '60vh', label }: props) => {
  const [field, , helpers] = useField(name)
  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    []
  )

  return (
    <div
      style={{
        margin: '15px 0 ',
        height: `calc(${height} + 80px)`
      }}
    >
      <div
        style={{
          marginBottom: '10px'
        }}
      >
        {label}
      </div>
      <ReactQuill
        theme="snow"
        style={{ width: '100%', height }}
        onChange={value => {
          helpers.setValue(value)
        }}
        value={field.value}
      />
    </div>
  )
}

export default TextBoxEditor
