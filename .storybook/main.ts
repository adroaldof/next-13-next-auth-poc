import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import { default as tsconfigPaths } from 'vite-tsconfig-paths'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    })
  },
}
export default config
