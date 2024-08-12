import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'about',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
