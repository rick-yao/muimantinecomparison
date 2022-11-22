import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { createTheme, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme()
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Component {...pageProps} />
          </CssBaseline>
        </ThemeProvider>
      </MantineProvider>
    </>
  )
}
