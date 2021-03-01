import React, { FC } from "react";
import { PageProps, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { Box, Button, Typography } from "@material-ui/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { BlogPostType } from "../../types/types";
import PathWithLinks from "../../components/pathWithLinks";
import { useStyles } from "./styles";
import { useAuth } from "../../context/authContext";

const BlogPost: FC<PageProps<QueryResponse, ContextType>> = ({
  pageContext: { previous, next },
  data,
  location,
}) => {
  const classes = useStyles();
  const { isSignedIn } = useAuth();

  const post = data.contentfulBlogPost;
  let imageNum = 0;
  const previousNumReadPosts = localStorage.getItem("numReadPosts");
  localStorage.setItem(
    "numReadPosts",
    previousNumReadPosts ? (+previousNumReadPosts + 1).toString() : "1"
  );

  const allowReading = () =>
    isSignedIn || previousNumReadPosts === null || +previousNumReadPosts < 3;

  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt.raw} />
      <PathWithLinks path={location.pathname} />
      <Box marginBottom={2}>
        <Typography variant="h3" component="h2">
          {post.title}
        </Typography>
      </Box>
      <Box marginBottom={2}>
        <Img fluid={post.featuredImage.fluid} />
      </Box>
      <Box marginBottom={2}>
        <Typography variant="subtitle1" color="textSecondary">
          {post.publishDate}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {`by ${post.author}`}
        </Typography>
      </Box>
      <Typography className={allowReading() ? undefined : classes.text}>
        {post.content &&
          documentToReactComponents(JSON.parse(post.content?.raw), {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: _ => {
                if (post.content?.references[imageNum].fluid) {
                  return (
                    <Img fluid={post.content?.references[imageNum++].fluid} />
                  );
                }
              },
            },
          })}
      </Typography>
      {!allowReading() && (
        <Box marginTop={4} marginBottom={4} className={classes.signInBox}>
          <Typography align="center">Sign in to Continue Reading</Typography>
          <Button
            color="primary"
            variant="contained"
            className={classes.signInBtn}
          >
            <Link to="/signin" className={classes.link}>
              Sign In
            </Link>
          </Button>
        </Box>
      )}
      <nav>
        <ul className={classes.list}>
          <li>
            {previous && (
              <Link to={`/blog/${previous.slug}`} rel="prev">
                &larr; {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog/${next.slug}`} rel="next">
                {next.title} &rarr;
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPost;

export const BLOG_POST_QUERY = graphql`
  query SingleBlog($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      publishDate(formatString: "MMMM DD, YYYY")
      excerpt {
        raw
      }
      featuredImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      content {
        raw
        references {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
      author
    }
  }
`;

type QueryResponse = {
  contentfulBlogPost: BlogPostType;
};

type ContextType = {
  slug: string;
  previous: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
};
