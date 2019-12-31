const path = require('path');
module.exports = {
    webpack: config => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '~':path.resolve(__dirname),
            '#comp':'~/components'
        }
      return config
    },
  }