import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cart',

  exposes: {
    './Module': './src/remote-entry.ts',
  },

  shared: (name, config) => {
    return false;
  },

  additionalShared: [
    {
      libraryName: 'react',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: '18.3.1',
      },
    },
    {
      libraryName: 'react-dom',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: '18.3.1',
      },
    },
  ],
};

export default config;
