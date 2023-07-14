import renderer from 'react-test-renderer'
import LottiePlayer from './'

describe('LottiePlayer', () => {
  test('renders correctly', () => {
    const component = renderer.create(
      <LottiePlayer animationData={{}} style={{}} id="lottie" />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
