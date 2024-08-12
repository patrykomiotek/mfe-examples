import { composePlugins, withNx, ModuleFederationConfig } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import { FederatedTypesPlugin } from '@module-federation/typescript';

import baseConfig from './module-federation.config';

const moduleFederationConfig: ModuleFederationConfig = {
  ...baseConfig,
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(moduleFederationConfig),
  (config) => {
    if (config.resolve) {
      config.resolve.fallback = {
        ...config.resolve?.fallback,
        path: false,
      };
    }

    // this will generate types for remotes for shell app and place it inside @mf-types
    config.plugins?.push(
      new FederatedTypesPlugin({
        federationConfig: {
          ...moduleFederationConfig,
          filename: 'remoteEntry.js',
          remotes: {
            shop: 'shop@http://localhost:4201/remoteEntry.js',
            cart: 'cart@http://localhost:4202/remoteEntry.js',
            about: 'about@http://localhost:4203/remoteEntry.js',
          },
        },
      })
    );

    return config;
  }
);
