import { sizes } from './variables'
import { css } from '@emotion/react'

/* ===============================================
#  set css variables
=============================================== */
function setSize() {
  return css`
    :root {
      --width: ${sizes.width};
    }
  `
}

/* ===============================================
#  global style
=============================================== */
export const globalStyle = css`
  ${setSize()}
`
