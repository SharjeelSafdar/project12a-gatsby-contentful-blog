import dotenv from "dotenv";
import { GatsbyConfig } from "gatsby";

import { firebaseAppConfig } from "../firebase/firebaseAppConfig";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

export default {
  siteMetadata: {
    title: `Blogsite`,
    description: `A blogsite with Gatsby, Contentful, Netlify, Firebase and Typescript.`,
    author: {
      name: `MianMuhammadSharjeelSafdar`,
      github: `https://github.com/SharjeelSafdar`,
    },
    siteUrl: `https://gatsby-blog-p12a.netlify.app/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        forceFullSync: true,
      },
    },
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-firebase`,
      options: {
        credentials: {
          ...firebaseAppConfig,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/../images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Contentful Blogsite`,
        short_name: `Gatsby Blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
} as GatsbyConfig;
