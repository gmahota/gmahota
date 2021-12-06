/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: `Guimarães Mahota`,
    author: `Guimarães Mahota`,
    keywords: `Guimarães Mahota,Guimaraes,Mahota,personal website, blog, developer,tech,pwa,web`,
    description: `Software Engineer, Front-End • BackEnd • Consultant • Traveler`,
    siteUrl: `https://gmahota.vercel.app/`,
    baseUrl: `https://gmahota.vercel.app/`,
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
