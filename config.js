'use strict'

module.exports = {
    name: 'API',
    version: '0.0.1',
    aws-id: process.env AWS_ACCESS_KEY_ID || 'xxxxxxxx',
    aws-key:process.env AWS_SECRET_ACCESS_KEY || 'xxxxxxxx',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    base_url: process.env.BASE_URL || 'http://localhost:3000',
    db: {
        uri: 'mongodb://127.0.0.1:27017/api',
    },
}
