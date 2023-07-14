import React from 'react'
import renderer from 'react-test-renderer'
import CheckLabelFormik from './'
import { Formik, Form } from 'formik'

test('renders CheckLabelFormik correctly', () => {
  const tree = renderer
    .create(
      <Formik initialValues={{ TermsConditions: false }} onSubmit={() => {}}>
        <Form>
          <CheckLabelFormik
            label="Remember me"
            name="TermsConditions"
            type="checkbox"
          />
        </Form>
      </Formik>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
