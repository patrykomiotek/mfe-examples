import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mfe-payments',

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
    // optional but if you want use router inside router (e.g. host browser router and remote memory router, you should keep this commented)
    // {
    //   libraryName: 'react-router-dom',
    //   sharedConfig: {
    //     eager: false,
    //     singleton: true,
    //     requiredVersion: '6.11.2',
    //   },
    // },
  ],
};

export default config;
