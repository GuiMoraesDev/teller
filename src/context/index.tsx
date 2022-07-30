import { PropsWithChildren } from 'react'

import { ThemeProvider } from 'styled-components'

import theme from 'styles/themes'

const GlobalAppProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default GlobalAppProvider
