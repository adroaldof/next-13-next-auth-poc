import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import { default as tsconfigPaths } from 'vite-tsconfig-paths'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    })
  },
}

export default config
