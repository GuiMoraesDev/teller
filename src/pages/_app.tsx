import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/themes'
import GlobalStyle from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="theme-color" content="#06092B" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
      </Head>

      <NextSeo
        title="Teller - Let everyone know what do you think."
        description="Given voice to everyone"
        canonical="https://teller-six.vercel.app/"
        openGraph={{
          url: 'https://teller-six.vercel.app/',
          title: 'Teller - Let everyone know what do you think.',
          description: 'Given voice to everyone',
          images: [{ url: 'https://teller-six.vercel.app/img/cover.png' }],
          site_name: 'Teller',
          locale: 'en'
        }}
        twitter={{
          handle: '@GuiMoraesDev',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
