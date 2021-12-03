/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: `Guimarães Mahota`,
    author: `Guimarães Mahota`,
    keywords: `Vitor Alencar,vitormalencar,personal website, blog, developer,tech,pwa,web`,
    description: `Software Engineer, Front-End • Consultant • Speaker • Traveler`,
    siteUrl: `https://www.vitormalencar.com/`,
    baseUrl: `https://www.vitormalencar.com/`,
    social: {
      twitter: "mahota_g",
      instagram: "gmahota",
      github: "gmahota",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-cname`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/src/images/` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `pages`, path: `${__dirname}/src/pages/` },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        name: `Guimarães Mahota`,
        short_name: `Guimaresmahota`,
        display: `standalone`,
        theme_color: `#000000`,
        background_color: `#000000`,
        icon: "src/images/favicon.png",
        purpose: `maskable`,
      },
    },
  ],
}
