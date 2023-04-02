import { Meta, StoryObj } from '@storybook/react'

import { ToolTip } from '@lexedwards/ui'

const meta = {
  title: 'Components/ToolTip',
  component: ToolTip,
  tags: ['autodocs'],
} satisfies Meta<typeof ToolTip>
export default meta
type Story = StoryObj<typeof meta>

export const Tip: Story = {
  args: {
    children: 'Keep it secret',
  },
}

export const Shortcut: Story = {
  args: {
    children: '⌘ K',
  },
}
