import { Meta, StoryObj } from '@storybook/react'

import { Notice } from '@lexedwards/ui'

const meta = {
  title: 'Components/Notice',
  component: Notice,
  tags: ['autodocs'],
  argTypes: {
    level: {
      description: 'Level of severity or class of information being provided',
      control: {
        type: 'select',
        options: ['success', 'info', 'warn', 'error'],
      },
    },
  },
} satisfies Meta<typeof Notice>
export default meta
type Story = StoryObj<typeof meta>

export const Error: Story = {
  args: {
    level: 'error',
    title: 'An Error occured',
  },
}

export const Info: Story = {
  args: {
    level: 'info',
    title: `Here's some extra info`,
  },
}

export const Success: Story = {
  args: {
    level: 'success',
    title: `Well done!`,
  },
}

export const Warn: Story = {
  args: {
    level: 'warn',
    title: `Here's a cautionary tail`,
    children: (
      <p>
        WARN No story files found for the specified pattern:
        src/**/docs.@(md|mdx)
        <br />
        WARN You (or an addon) are using the 'config' preset field. This has
        been replaced by 'previewAnnotations' and will be removed in 8.0
      </p>
    ),
  },
}
