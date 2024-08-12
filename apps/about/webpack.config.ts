import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import { FederatedTypesPlugin } from '@module-federation/typescript';

import baseConfig from './module-federation.config';

const moduleFederationConfig = {
  ...baseConfig,
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(moduleFederationConfig, { dts: false }), // temporary workaround https://github.com/nrwl/nx/issues/27198#issuecomment-2275420582
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
