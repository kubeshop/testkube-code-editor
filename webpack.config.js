import MonacoEditorWebpackPlugin from 'monaco-editor-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const resolve = filePath => new URL(filePath, import.meta.url).toString().replace(/^file:\/\//, '')

export default {
  entry: resolve('src/index.ts'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    // Delete Prettier functionality from monaco-yaml, as it's very heavy
    alias: {
      'prettier/standalone.js$': resolve('stubs/prettier.js'),
      'prettier/parser-yaml.js$': resolve('stubs/prettier.js'),
    },
  },
  externals: {
    react: 'react',
    'react-use': 'react-use',
    // 'monaco-yaml': 'monaco-yaml',
    'yaml': 'yaml',
  },
  output: {
    library: {
      type: 'module',
    },
    filename: 'editor.js',
    path: resolve('dist'),
    chunkFormat: 'module',
    chunkLoading: 'import',
  },
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
    ],
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      chunkFilename: 'editor.css',
    }),
    new MonacoEditorWebpackPlugin({
      languages: ['yaml'],
      customLanguages: [
        {
          label: 'yaml',
          entry: 'monaco-yaml',
          worker: {
            id: 'monaco-yaml/yamlWorker',
            entry: 'monaco-yaml/yaml.worker',
          },
        },
      ],
      features: ['caretOperations', 'clipboard', 'contextmenu', 'hover', 'indentation', 'lineSelection', 'suggest'],
    }),
  ],
}
