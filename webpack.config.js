var path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist' // used when webpack-dev-server has public ip. allows reloading
    },
    devServer: {
        disableHostCheck: true // security risk. I use it when i'm devloping on a headless machine
    }
};
