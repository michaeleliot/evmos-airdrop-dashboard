module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          Modules: './src/components/modules',
          Pages: './src/components/pages',
          Sections: './src/components/sections',
          Styles: './src/styles',
          Images: './src/assets/images',
          Utils: './src/utils',
          APIs: './src/utils/apis',
          Models: './src/utils/models',
        },
      },
    ],
  ],
};
