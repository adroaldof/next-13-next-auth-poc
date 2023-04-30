import { Meta, StoryObj } from '@storybook/react'
import { Navbar } from '@/components/navbar/Navbar'
import { Heading } from '../ui/text/Heading'
import { Button } from '../ui/button/Button'

const meta: Meta<typeof Navbar> = {
  title: 'Page Structure/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4">
        <div className="dark">
          <div className="mb-4 min-h-[150px] bg-slate-50 shadow-md dark:bg-slate-900">
            <Story />
            <div className="mx-auto max-w-7xl p-4">
              <div className="h-36 rounded-lg border-2 border-dashed border-gray-200"></div>
            </div>
          </div>
        </div>
        <div className="mb-4 min-h-[150px] bg-slate-50 shadow-md dark:bg-slate-900">
          <Story />
          <div className="mx-auto max-w-7xl p-4">
            <div className="h-36 rounded-lg border-2 border-dashed border-gray-200"></div>
          </div>
        </div>
      </div>
    ),
  ],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Navbar>

export const Default: Story = {
  args: {
    logo: (
      <Heading size="sm" className="mb-0">
        Logo Inc.
      </Heading>
    ),
    children: [
      <Button key="home" type="button" variant="link" className="justify-start p-0">
        Home
      </Button>,
      <Button key="team" type="button" variant="link" className="justify-start p-0">
        Team
      </Button>,
      <Button key="projects" type="button" variant="link" className="justify-start p-0">
        Projects
      </Button>,
    ],
  },
}
