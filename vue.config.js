const isProd = process.env.NODE_ENV === `production`

const crypto = require(`crypto`)

/**
 * md4 algorithm is not available anymore in NodeJS 17+ (because of lib SSL 3).
 * In that case, silently replace md4 by md5 algorithm.
 */
try {
  crypto.createHash(`md4`)
} catch (e) {
  const origCreateHash = crypto.createHash
  crypto.createHash = (alg, opts) => {
    return origCreateHash(alg === `md4` ? `md5` : alg, opts)
  }
}

module.exports = {
  lintOnSave: true,
  publicPath: `/`, // 基本路径, 建议以绝对路径跟随访问目录
  configureWebpack: (config) => {
    config.module.rules.push({
      test: /\.(txt|md)$/i,
      use: [
        {
          loader: `raw-loader`,
        },
      ],
    })
    // 为生产环境修改配置...
    if (process.env.NODE_ENV === 'production') {
      config.mode = 'production';
      // 打包文件大小配置
      config.performance = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000
      }
  }
  },
  productionSourceMap: !isProd,
  css: {
    sourceMap: !isProd,
  },
}
