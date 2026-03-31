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
  layout: 'centered'
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
