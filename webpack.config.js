const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['react-refresh/babel'], // HMR 플러그인 추가
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg)$/i,
        use: 'file-loader',
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 확장자 생략 가능
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html', // HTML 템플릿 경로
    }),
    new ReactRefreshWebpackPlugin(), // 플러그인 추가
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    hot: true, // HMR 활성화
    historyApiFallback: true, // 라우터의 HTML5 History API 지원
  },
};
