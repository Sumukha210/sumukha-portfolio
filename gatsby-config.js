/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Hello there,sumukha here,checkout my portfolio",
    titleTemplate: "%s · Sumukha kb Portfolio",
    description:
      "This is my personal Portfolio,it contains all the basic information's about me. It also contains the project that i built.",
    url: "http://Sumukhakb210.com", // No trailing slash allowed!
    image:
      "https://raw.githubusercontent.com/Sumukha210/sumukha-portfolio/main/static/main-img.png", // Path to your image you placed in the 'static' folder
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
