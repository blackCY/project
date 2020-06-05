const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

let optimization;

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devDist',
  assetsDir: 'assets',
  lintOnSave: false,
  runtimeCompiler: true,
  chainWebpack: config => {
    // 移除prefetch插件，避免加载多余的资源
    config.plugins.delete('prefetch');
    config.plugins.delete('preload');
    // 压缩图片
    const imagesRule = config.module.rule('images');
    imagesRule.uses.clear();
    imagesRule
      .use('file-loader')
      .loader('url-loader')
      .options({
        limit: 10240,
        fallback: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/images',
          },
        },
      });
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.mode = 'production';
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: /\.(js|css|html)$/,
          threshold: 10240,
          minRatio: 0.8,
          filename: info => {
            return `${info.path}.gz${info.query}`;
          },
        }),
      );
    } else {
      config.mode = 'development';
    }
    optimization = {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 20000,
        minChunks: 1,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `npm.${packageName.replace('@', '')}`;
            },
            reuseExistingChunk: true,
          },
          // default: {
          //   priority: -20,
          //   reuseExistingChunk: true,
          //   filename: 'default.[hash:8].js',
          //   enforce: false,
          // },
        },
      },
      minimize: true,
      minimizer: [
        new TerserWebpackPlugin({
          test: /\.js(\?.*)?$/i,
          include: path.resolve(__dirname, './src'),
          exclude: /node_modules/,
          cache: './src',
          parallel: require('os').cpus().length - 1,
        }),
      ],
    };
    Object.assign(config, {
      resolve: {
        extensions: ['.js', '.vue', '.json', '.scss'],
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
        plugins: [],
      },
      optimization: optimization,
      // devtool: process.env.NODE_ENV === 'production' || 'cheap-module-eval-source-map',
    });
  },
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      scss: {
        prependData: `@import "./src/styles/_index.scss";`,
      },
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 75,
            exclude: 'pc', // 注意这里是排除
            propList: ['*'],
            selectorBlackList: [
              // '.el-pagination',
              // '.el-pager',
              // '.el-message',
              // '.el-message--error',
              // '.el-message__icon',
              // '.el-icon-error',
              // '.el-message__content',
              '.el-',
            ],
          }),
        ],
      },
    },
    requireModuleExtension: true,
  },
  parallel: require('os').cpus().length > 1,
  pwa: {},
  devServer: {
    open: false,
    host: '0.0.0.0',
    https: false,
    hot: true,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
    overlay: {
      warnings: true,
      errors: true,
    },
    compress: true,
  },
  pluginOptions: {},
};
