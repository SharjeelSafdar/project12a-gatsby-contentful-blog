import React, { FC } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { useAuth } from "../context/authContext";

const IndexPage: FC = () => {
  const { isSignedIn, userNameOrEmail } = useAuth();

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to our blogsite with Gatsby and Contentful.</p>
      <p>
        You are currently {""}
        {isSignedIn ? (
          <span>
            logged in as <strong>{userNameOrEmail}</strong>
          </span>
        ) : (
          <span>not logged in</span>
        )}
        .
      </p>
      <Link to="/blog">
        <p>Visit our blog page.</p>
      </Link>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  );
};

export default IndexPage;
