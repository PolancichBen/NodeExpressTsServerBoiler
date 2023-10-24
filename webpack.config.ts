import path from 'path';
import nodeExternals from 'webpack-node-externals';
import 'webpack-dev-server';

const SRC_DIR = path.join(__dirname, 'backEnd/server');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
  entry: `${SRC_DIR}/server.ts`,
  mode: NODE_ENV,
  target: 'node',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      },
    ],
  },
  externals: [nodeExternals()],
};
