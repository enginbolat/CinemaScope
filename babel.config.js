module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './src/app',
          '@features': './src/features',
          '@shared': './src/shared',
          '@core': './src/core',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
