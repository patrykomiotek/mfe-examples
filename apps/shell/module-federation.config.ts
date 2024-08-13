import { ModuleFederationConfig } from '@nx/webpack';

import baseConfig from '../../module-federation.config';

const config: ModuleFederationConfig = {
  ...baseConfig,
  name: 'shell',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  remotes: ['mfe-accounts', 'mfe-dashboard', 'mfe-payments', 'mfe-settings'],

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
    {
      libraryName: '@tanstack/react-query',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: '>=5.51.23',
      },
    },
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
