import '@lexedwards/ui/src/styles/global.css'
// import autodocTemplate from './autodocTemplate.mdx'
import { withThemeByClassName } from '@storybook/addon-styling'
import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // docs: {
    //   page: autodocTemplate,
    // },
    backgrounds: {
      values: [
        {
          name: 'white',
          value: '#fff',
        },
        {
          name: 'light',
          value: '#fafafa',
        },
        {
          name: 'dark',
          value: '#09090b',
        },
        {
          name: 'black',
          value: '#000',
        },
      ],
    },
  },
}

export const decorators = [
  withThemeByClassName({
    themes: {
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
]

export default preview
