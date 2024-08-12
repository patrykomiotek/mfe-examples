import { ModuleFederationConfig } from '@nx/webpack';
// Core libraries such as react, angular, redux, ngrx, etc. must be
// singletons. Otherwise the applications will not work together.
const coreLibraries = new Set([
  'react',
  'react-dom',
  'react-router-dom',
  // A workspace library for a publish/subscribe
  // system of communication.
  '@acme/pub-sub',
]);

export const config: ModuleFederationConfig = {
  // Share core libraries, and avoid everything else
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return defaultConfig;
    }

    // Returning false means the library is not shared.
    return false;
  },
};

export default config;
