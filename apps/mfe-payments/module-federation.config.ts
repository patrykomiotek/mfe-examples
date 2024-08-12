import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mfe-payments',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
