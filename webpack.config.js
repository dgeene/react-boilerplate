var path = require('path');

module.exports = {
    entry: './app/index.js',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist' // used when webpack-dev-server has public ip. allows reloading
    },
    devServer: {
        disableHostCheck: true // security risk. I use it when i'm devloping on a headless machine
    }
};
