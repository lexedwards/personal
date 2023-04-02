import { Meta, StoryObj } from '@storybook/react'

import { Link } from '@lexedwards/ui'

const meta = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    children: {
      type: 'string',
    },
  },
} satisfies Meta<typeof Link>
export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Link',
  },
}
