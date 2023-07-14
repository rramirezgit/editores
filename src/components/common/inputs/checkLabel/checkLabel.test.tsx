import React from 'react'
import renderer from 'react-test-renderer'
import CheckLabel from '.'

test('renders CheckLabel correctly', () => {
  const tree = renderer.create(<CheckLabel label="Remember me" />).toJSON()
  expect(tree).toMatchSnapshot()
})
