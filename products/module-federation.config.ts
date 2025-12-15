import { ModuleFederationConfig } from '@nx/rspack/module-federation';

const config: ModuleFederationConfig = {
  name: 'products',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
