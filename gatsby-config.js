module.exports = {
  siteMetadata: {
    title: `Project:Iris`,
    description: `A collection of 10,000 NFTs that give you access to Iris:Verse.`,
    author: `@Project:Iris`,
    siteUrl: `http://projectiris.online/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `project-iris`,
        short_name: `iris`,
        start_url: `/`,
        background_color: `#111827`,
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
