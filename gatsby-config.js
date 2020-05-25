module.exports = {
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['PT Sans Narrow', 'Rancho', 'Neuton']
                }
            }
        }
    ]
}
