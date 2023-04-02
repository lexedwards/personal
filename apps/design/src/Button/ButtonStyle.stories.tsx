import { Meta, StoryObj } from '@storybook/react'

import { ButtonStyle } from '@lexedwards/ui'

const meta = {
  title: 'Styles/Button',
  component: ButtonStyle,
  tags: ['autodocs'],
  argTypes: {
    children: {
      type: 'string',
    },
  },
} satisfies Meta<typeof ButtonStyle>
export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button',
  },
}
