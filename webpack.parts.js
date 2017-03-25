exports.devServer = ({ contentBase, host, port } = {}) => ({
    devServer: {
        contentBase,
        host,
        port,

        /**
         * Enable history API fallback so HTML5 History API based
         * routing works. This is a good default that will come
         * in handy in more complicated setups.
         */
        historyApiFallback: true,
        hot: true,
        inline: true,

        // Capture errors in overlay.
        overlay: {
            errors: true,
            warnings: true
        },

        progress: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only'
    }
})
