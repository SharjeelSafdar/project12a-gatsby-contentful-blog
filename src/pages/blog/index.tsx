import React, { FC } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Typography } from "@material-ui/core";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import BlogPostListItem from "../../components/blogPostListItem";
import { useStyles } from "./styles";
import { PostType } from "../../types/types";

const Blog: FC = () => {
  const data: AllBlogsQueryResponse = useStaticQuery(ALL_BLOGS_QUERY);
  const classes = useStyles();

  return (
    <Layout>
      <SEO
        title={"All Blogs"}
        description={"All blog posts published on the site."}
      />
      <Typography variant="h4" component="h1">
        All Blogs
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {`${data.allContentfulBlogPost.totalCount} blogs in total`}
      </Typography>
      {data.allContentfulBlogPost.totalCount > 0 ? (
        <ol className={classes.list}>
          {data.allContentfulBlogPost.edges.map(post => (
            <Link
              to={`/blog/${post.node.slug}`}
              key={post.node.slug}
              className={classes.link}
            >
              <BlogPostListItem post={post.node} />
            </Link>
          ))}
        </ol>
      ) : (
        <Typography variant="body1">No blog posts found.</Typography>
      )}
    </Layout>
  );
};

export default Blog;

const ALL_BLOGS_QUERY = graphql`
  query AllBlogs {
    allContentfulBlogPost {
      totalCount
      edges {
        node {
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
        }
      }
    }
  }
`;

type AllBlogsQueryResponse = {
  allContentfulBlogPost: {
    totalCount: number;
    edges: { node: PostType }[];
  };
};
