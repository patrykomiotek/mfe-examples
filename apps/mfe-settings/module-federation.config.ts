import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mfe-settings',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
