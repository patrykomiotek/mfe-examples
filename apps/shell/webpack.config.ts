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

    // this will generate types for remotes for shell app and place it inside apps/shell/@mf-types
    config.plugins?.push(
      new FederatedTypesPlugin({
        federationConfig: {
          ...moduleFederationConfig,
          filename: 'remoteEntry.js',
          remotes: {
            'mfe-accounts': 'mfe-accounts@http://localhost:4204/remoteEntry.js',
            'mfe-dashboard':
              'mfe-dashboard@http://localhost:4205/remoteEntry.js',
            'mfe-payments': 'mfe-payments@http://localhost:4206/remoteEntry.js',
            'mfe-settings': 'mfe-settings@http://localhost:4207/remoteEntry.js',
          },
        },
      })
    );

    return config;
  }
);
