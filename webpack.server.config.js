const fs = require('fs')
const path = require('path');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

module.exports = {

    entry: path.resolve(__dirname, 'server.js'),

    output: {
        filename: 'server.bundle.js'
    },

    target: 'node',

    // Keep node_module paths out of the bundle.
    externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
            'react-dom/server'
        ]).reduce(function (ext, mod) {
            ext[mod] = 'commonjs ' + mod
            return ext
    }, {}),

    node: {
        __filename: false,
        __dirname: false
    },

    module: {
        loaders: [
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            },
            {
                // http://survivejs.com/webpack/loading-less-or-sass/
                test: /\.less$/,
                loader: 'style!css!less',

                // Include accepts either a path or an array of paths.
                include: PATHS.app
            },
            {
                // Set up jsx. This accepts js too, thanks to RegExp.
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react',
                /**
                 * Parse only app files! Without this it will go through the
                 * entire project. In addition to being slow, that will most
                 * likely result in an error.
                 */
                include: PATHS.app
            },
        ]
    }
}
