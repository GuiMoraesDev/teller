import { create } from '@storybook/theming'

export default create({
  base: 'light',

  brandTitle: 'Teller - Storybook',
  brandUrl: 'https://teller-six.vercel.app/',
  brandImage: require('../src/assets/images/logo.svg'),
  brandTarget: '_self',
})
