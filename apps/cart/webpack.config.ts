import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';

import baseConfig from './module-federation.config';
import FederatedTypesPlugin from '@module-federation/typescript';

const moduleFederationConfig = {
  ...baseConfig,
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(moduleFederationConfig),
  (config) => {
    config.plugins?.push(
      new FederatedTypesPlugin({
        federationConfig: {
          ...moduleFederationConfig,
          filename: 'remoteEntry.js',
        },
      })
    );

    return config;
  }
);
