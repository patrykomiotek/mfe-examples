import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import FederatedTypesPlugin from '@module-federation/typescript';

import baseConfig from './module-federation.config';

const moduleFederationConfig = {
  ...baseConfig,
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(moduleFederationConfig, { dts: false }), // temporary workaround https://github.com/nrwl/nx/issues/27198#issuecomment-2275420582
  // types are generated inside dist/apps/appName/@mf-types
  (config) => {
    if (config.resolve) {
      config.resolve.fallback = {
        ...config.resolve?.fallback,
        path: false,
      };
    }

    // dashboard is isign this remote and needs types
    // this will generate types for remotes for shell app and place it inside apps/shell/@mf-types
    config.plugins?.push(
      new FederatedTypesPlugin({
        federationConfig: {
          ...moduleFederationConfig,
          filename: 'remoteEntry.js',
          remotes: {
            'mfe-accounts': 'mfe-accounts@http://localhost:4204/remoteEntry.js',
          },
        },
      })
    );

    return config;
  }
);
