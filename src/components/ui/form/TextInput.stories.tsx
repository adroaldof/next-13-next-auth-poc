import { Meta, StoryObj } from '@storybook/react'
import { Form } from '@/components/ui/form/Form'
import { useForm } from 'react-hook-form'
import { action } from '@storybook/addon-actions'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button/Button'

const schema = z.object({
  sampleInput: z.string().nonempty('Sample input is a required field'),
})

type SampleForm = z.infer<typeof schema>

const meta: Meta<typeof Form.TextInput> = {
  title: 'Forms/TextInput',
  component: Form.TextInput,
  parameters: {
    docs: {
      controls: {
        exclude: ['class'],
      },
    },
  },
  decorators: [
    (Story) => {
      const formHandlers = useForm<SampleForm>({
        resolver: zodResolver(schema),
      })

      const { handleSubmit, formState } = formHandlers

      const onSubmit = (data: SampleForm) => {
        console.log(`** data`, JSON.stringify(data, null, 2))
        action('onSubmit')(data)
      }

      return (
        <>
          <div className="dark">
            <div className="mb-4 bg-slate-50 p-4 shadow-md dark:bg-slate-900">
              <Form.Provider form={formHandlers} onSubmit={handleSubmit(onSubmit)}>
                <Form.Field name="sampleInput">
                  <Form.Label htmlFor="sampleInput">Text Input</Form.Label>
                  <Story />
                  <Form.ErrorMessage field="sampleInput" />
                </Form.Field>
                <Button type="submit" fullWidth disabled={formState?.isSubmitting} isLoading={formState?.isSubmitting}>
                  Submit
                </Button>
              </Form.Provider>
            </div>
          </div>
          <div className="mb-4 bg-slate-50 p-4 shadow-md dark:bg-slate-900">
            <Form.Provider form={formHandlers} onSubmit={handleSubmit(onSubmit)}>
              <Form.Field name="sampleInput">
                <Form.Label htmlFor="sampleInput">Text Input</Form.Label>
                <Story />
                <Form.ErrorMessage field="sampleInput" />
              </Form.Field>
              <Button type="submit" fullWidth disabled={formState?.isSubmitting} isLoading={formState?.isSubmitting}>
                Submit
              </Button>
            </Form.Provider>
          </div>
        </>
      )
    },
  ],
  argTypes: {
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    className: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof Form.TextInput>

export const Default: Story = {
  args: {
    name: 'sampleInput',
    type: 'text',
    placeholder: 'Enter your text here',
  },
}
