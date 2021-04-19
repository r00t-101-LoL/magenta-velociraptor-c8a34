const siteMetadata = require('./site-metadata.json')

module.exports = {
    pathPrefix: '/',
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {}
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {}
        },
        {
        resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: 1282G4,
      }

       /* {
            resolve: 'gatsby-plugin-load-script',
            options: {
              disable: !process.env.SENTRY_DSN, // When do you want to disable it ?
              src: 'https://browser.sentry-cdn.com/5.15.4/bundle.min.js',
              integrity:
                'sha384-Nrg+xiw+qRl3grVrxJtWazjeZmUwoSt0FAVsbthlJ5OMpx0G08bqIq3b/v0hPjhB',
              crossorigin: 'anonymous',
              onLoad: `() => Sentry.init({dsn:"${process.env.SENTRY_DSN}"})`,
            },
          },
        ],
        options: {
            src: '/static/assets/js/popup.js', // Change to the script filename
          },
      }, */

        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        }
    ]
};
