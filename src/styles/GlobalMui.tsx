import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { useMemo } from 'react'
import { lighten, darken } from '@mui/material/styles'
import { colors } from './variables'
import { globalStyle } from './GlobalSetting'
import { Global, css } from '@emotion/react'

const getDesignTokens = () => ({
  palette: {
    primary_blue: {
      main: colors.primary_blue,
      light: lighten(colors.primary_blue, 0.1),
      dark: darken(colors.primary_blue, 0.1),
      contrastText: '#fff'
    },
    primary_yellow: {
      main: colors.primary_yellow,
      light: lighten(colors.primary_yellow, 0.1),
      dark: darken(colors.primary_yellow, 0.1),
      contrastText: '#fff'
    },
    secondary_blue: {
      main: colors.secondary_blue,
      light: lighten(colors.secondary_blue, 0.1),
      dark: darken(colors.secondary_blue, 0.1),
      contrastText: '#fff'
    },
    secondary_yellow: {
      main: colors.secondary_yellow,
      light: lighten(colors.secondary_yellow, 0.1),
      dark: darken(colors.secondary_yellow, 0.1),
      contrastText: '#fff'
    },
    error: {
      main: colors.error,
      light: lighten(colors.error, 0.1),
      dark: darken(colors.error, 0.1)
    },
    warning: {
      main: colors.warning,
      light: lighten(colors.warning, 0.1),
      dark: darken(colors.warning, 0.1)
    },
    success: {
      main: colors.success,
      light: lighten(colors.success, 0.1),
      dark: darken(colors.success, 0.1)
    },
    info: {
      main: colors.info,
      light: lighten(colors.info, 0.1),
      dark: darken(colors.info, 0.1)
    },
    text: {
      default: colors.primary_text,
      primary: colors.primary_text,
      secondary: colors.secondary_text
    }
  },
  typography: {
    fontFamily: ['Open Sans', 'system-ui'].join(',')
  }
})

function setColor() {
  let styles = ''
  for (const key in colors) {
    styles += `--${key}: ${colors[key as keyof typeof colors]};`
  }

  return css`
    :root {
      ${styles}
    }
    ${globalStyle};
  `
}

const Theme = ({ children }: { children: any }) => {
  const theme = useMemo(() => createTheme(getDesignTokens()), [])
  const color = setColor()

  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <Global styles={color} />
        {children}
      </>
    </ThemeProvider>
  )
}

export default Theme
