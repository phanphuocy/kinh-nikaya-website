require("dotenv").config();
const path = require("path");

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: "Home Owners Association",
    description: "A template website for Home Owner Associations",
    author: "Cicero",
    year: new Date().getFullYear(),
    image: "./src/images/kristine-tanne-b8gOvy2kFVA-unsplash.jpg",
    url: "https://frosty-torvalds-822eb0.netlify.app",
  },
  plugins: [
    `gatsby-theme-material-ui`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-awesome-pagination`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
  ],
};
