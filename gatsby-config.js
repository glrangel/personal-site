module.exports = {
  plugins:[
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-page-transitions",
    "gatsby-plugin-typescript",
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto Mono','VT323','Major Mono Display','Cutive Mono', 'Source Code Pro']
        }
      }
    }
  ]
}
