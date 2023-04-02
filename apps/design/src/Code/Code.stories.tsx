import { Meta, StoryObj } from '@storybook/react'

import { Code } from '@lexedwards/ui'

const meta = {
  title: 'Components/Code',
  component: Code,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    language: {
      control: 'select',
    },
    fileName: {
      control: 'text',
      defaultValue: '',
    },
    startingLine: {
      control: 'number',
      defaultValue: 1,
    },
  },
} satisfies Meta<typeof Code>
export default meta
type Story = StoryObj<typeof meta>

export const Bash: Story = {
  args: {
    language: 'bash',
    children: `echo "Hello world"`,
  },
}

export const JSON: Story = {
  args: {
    language: 'json',
    children: `{
  "foo": {
    "bar": true
  }
}`,
  },
}

export const JSX: Story = {
  args: {
    children: `<SomeUI with={props} some='text' />`,
    fileName: './src/index.tsx',
    language: 'jsx',
    startingLine: 14,
  },
}

export const Markdown: Story = {
  args: {
    language: 'markdown',
    children: `# Heading 1

## Heading 2

**Bold Text**`,
  },
}

export const Rust: Story = {
  args: {
    language: 'rust',
    children: `println!("{} days",31)`,
  },
}

export const Typescript: Story = {
  args: {
    language: 'typescript',
    startingLine: 10,
    children: `// log out something
console.log('hello world');
console.log('hello world');`,
  },
}

export const Yaml: Story = {
  args: {
    language: 'yaml',
    children: `version: 0.2

run-as: Linux-user-name
        
phases:
  install:
    run-as: Linux-user-name
    on-failure: ABORT
    runtime-versions:
      runtime: version
    commands:
      - command
  build:
    run-as: Linux-user-name
    on-failure: ABORT
    commands:
      - command
`,
  },
}
