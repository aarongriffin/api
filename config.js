'use strict'

module.exports = {
    name: 'API',
    version: '0.0.1',
    aws-id: process.env AWS_ACCESS_KEY_ID || 'AKIAJKOCUSWZ6FM33R7A',
    aws-key:process.env AWS_SECRET_ACCESS_KEY || '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',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    base_url: process.env.BASE_URL || 'http://localhost:3000',
    db: {
        uri: 'mongodb://127.0.0.1:27017/api',
    },
}
