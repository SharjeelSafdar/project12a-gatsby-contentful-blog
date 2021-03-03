<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Project 12A: Blogsite With Gatsby, Contentful, TypeScript and Surge
</h1>

### Link to Web App

The web app has been deployed to Surge, and can be accessed [here](https://gatsby-contentful-blog-p12a.surge.sh/).

### Features

The following are some of the features of this project:

- Bootstrapped with [GatsbyJS](https://www.gatsbyjs.com/)
- Additionally, includes TypeScript support for gatsby-config, gatsby-node, gatsby-browser and gatsby-ssr files
- Uses [Firebase Auth](https://firebase.google.com/docs/auth/web/start) for authenticating users
- Blog content hosted on [Contentful](https://www.contentful.com/) Headless CMS
- Custom UI for sign in/up using [Formik](https://formik.org/docs/overview), and [Yup](https://github.com/jquense/yup) for form validation
- Gated content; a not signed in user can read a maximum of 3 posts
- Site hosted on [Surge](https://surge.sh/)
- CI/CD pipeline with Github Workflows
- Website is redeployed on either a push event on the master branch or a repository dispatch event from Contentful Webhook
- Completely typed with Typescript
- Completely interactive and responsive design with [Material-UI](https://material-ui.com/) components.
