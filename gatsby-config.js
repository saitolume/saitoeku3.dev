module.exports = {
  siteMetadata: {
    title: 'saitoeku3.dev',
    description: 'saitoeku3 homepage',
    author: 'saitoeku3'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`
      }
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        allExtensions: true,
        isTSX: true
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'saitoeku3.dev',
        short_name: 'saitoeku3',
        start_url: '/',
        lang: 'en',
        theme_color: '#222',
        display: 'standalone',
        icon: `${__dirname}/static/images/icon.jpg`
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
  ]
}
