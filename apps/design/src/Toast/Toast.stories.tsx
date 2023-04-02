import { Meta, StoryObj } from '@storybook/react'

import { Toast, ButtonBlank, LinkStyle, Link } from '@lexedwards/ui'

const meta = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Toast>
export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    title: 'Title',
    children: 'Details',
  },
}

export const CookieToast: Story = {
  args: {
    title: 'Come to the Darkside',
    children: (
      <>
        <p>...We have cookies</p>
        <div>
          <span>Would you like to </span>
          <ButtonBlank>
            <LinkStyle>Accept all cookies</LinkStyle>
          </ButtonBlank>
          <span> or </span>
          <Link>Manage Preferences</Link>
        </div>
      </>
    ),
  },
}

export const SavedStateToast: Story = {
  args: {
    children: 'Your changes have been saved',
    onClose: undefined,
  },
}
