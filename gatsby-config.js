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
     resolve: `gatsby-plugin-styled-components`
     }

  ]
}
