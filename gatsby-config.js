require("dotenv").config({
  path: `.env.production`,
})


module.exports = {
  siteMetadata: {
    title: `Inside Out`,
    siteUrl: `https://indhu.me`,
    description: `My fancy site description`,
    author: `Indhu Chinnathambi`,
    fbAppId: process.env.FB_APP_ID
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {      
          trackingId: process.env.GA_TRACKING_ID,
          head: true
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: process.env.ADSENS_ID
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              showCaptions: true,
              linkImagesToOriginal: false
            },
          },
          `gatsby-plugin-sharp`,
          `gatsby-transformer-sharp`,
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "indhu.me",
      },
    },
  ],
};