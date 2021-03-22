/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Sumukha Portfolio",
    titleTemplate: "%s · Sumukha kb Portfolio",
    description:
      "This is Sumukha kb's personal Portfolio,it contains all the necessary information about himself.",
    url: "http://Sumukhakb210.com", // No trailing slash allowed!
    image: "/main-img.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@sumukha210",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-webpack-bundle-analyser-v2",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\: 500,600,800,900`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
