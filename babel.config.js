module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@images': './src/assets/images',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@helpers': './src/helpers',
          '@theme': './src/theme',
          '@routes': './src/routes',
          '@hooks': './src/hooks',
          '@redux': './src/redux',
          '@services': './src/services',
          '@network': './src/network',
          '@model': './src/model',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
