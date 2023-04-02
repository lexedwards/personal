import { Meta, StoryObj } from '@storybook/react'

import { LinkStyle } from '@lexedwards/ui'

const meta = {
  title: 'Styles/Link',
  component: LinkStyle,
  tags: ['autodocs'],
  argTypes: {
    children: {
      type: 'string',
    },
  },
} satisfies Meta<typeof LinkStyle>
export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Link',
  },
}
