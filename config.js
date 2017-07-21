'use strict'

module.exports = {
    name: 'rest-api',
    version: '0.0.1',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    db: {
        uri: 'mongodb://nirajs:bA9nDEfapRVm36CT@cluster0-shard-00-00-zwboe.mongodb.net:27017,cluster0-shard-00-01-zwboe.mongodb.net:27017,cluster0-shard-00-02-zwboe.mongodb.net:27017/atlas?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
    }
}
