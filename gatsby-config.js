module.exports = {
  plugins:[
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-88460733-1",
      },
    },
    {
     resolve: `gatsby-plugin-styled-components`
     }

  ]
}
