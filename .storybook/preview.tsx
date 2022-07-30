import React from 'react'
import { withThemesProvider } from 'themeprovider-storybook'

import GlobalStyle from '../src/styles/global'

import defaultTheme from '../src/styles/themes'

const MyThemes = [
  {
    name: 'Light', // Required it's used for displaying the button label,
    ...defaultTheme
  }
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  (Story) => (
    <>
      <Story />
      <GlobalStyle />
    </>
  ),
  withThemesProvider(MyThemes)
]
