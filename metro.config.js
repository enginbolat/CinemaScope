const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot);

// Mirror the path aliases from babel.config.js so Metro can resolve them
// even when the Babel module-resolver output isn't re-resolved by Metro.
config.resolver.extraNodeModules = {
  '@app': path.resolve(projectRoot, 'src/app'),
  '@features': path.resolve(projectRoot, 'src/features'),
  '@shared': path.resolve(projectRoot, 'src/shared'),
  '@core': path.resolve(projectRoot, 'src/core'),
};

module.exports = config;
