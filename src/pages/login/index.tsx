import React, { FC } from "react";
import firebase from "gatsby-plugin-firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { Typography } from "@material-ui/core";

const LogIn: FC = () => {
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: false,
      },
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
  };

  return (
    <Layout>
      <SEO title="Login" />
      <div
        style={{
          height: "100%",
          marginBottom: "3rem",
          marginTop: "3rem",
        }}
      >
        <Typography variant="h5" component="h2" align="center">
          Sign In/Up
        </Typography>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </Layout>
  );
};

export default LogIn;
