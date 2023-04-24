import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '@/components/ui/button/Button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    docs: {
      controls: {
        exclude: ['class'],
      },
    },
  },
  args: {
    children: 'Click Me',
  },
  decorators: [
    (Story) => (
      <>
        <div className="dark">
          <div className="mb-4 bg-slate-50 p-4 shadow-md dark:bg-slate-900">
            <Story />
          </div>
        </div>
        <div className="mb-4 bg-slate-50 p-4 shadow-md dark:bg-slate-900">
          <Story />
        </div>
      </>
    ),
  ],
  argTypes: {
    isLoading: {
      control: { name: 'boolean', required: false },
      type: { name: 'boolean', required: false },
      defaultValue: false,
      name: 'Loading',
    },
    disabled: {
      control: { type: 'boolean', default: false },
      type: { name: 'boolean', required: false },
      defaultValue: false,
      name: 'Disabled',
    },
    fullWidth: {
      defaultValue: false,
      type: { name: 'boolean', required: false },
      name: 'Full Width',
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['default', 'destructive', 'outline', 'ghost', 'link'],
      defaultValue: 'default',
      name: 'Variant',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
      name: 'Size',
    },
    children: {
      name: 'Children',
    },
    className: {
      control: { type: 'text' },
      defaultValue: '',
      type: { name: 'string', required: false },
      name: 'Class Name',
    },
    onClick: {
      name: 'On Click',
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    onClick: action('clicked'),
  },
}

export const Destructive: Story = {
  args: {
    ...Default.args,
    variant: 'destructive',
    children: 'Delete',
  },
}

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: 'ghost',
  },
}

export const Link: Story = {
  args: {
    ...Default.args,
    variant: 'link',
  },
}
