import { GatsbyNode } from "gatsby";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const blogPostComponent = path.resolve("src/templates/blogPost/index.tsx");
  const result = await graphql<AllBlogSlugsResponse>(`
    query AllBlogSlugs {
      allContentfulBlogPost {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts from contentful`,
      result.errors
    );
    return;
  }

  const posts = result.data?.allContentfulBlogPost.edges;

  if (posts && posts.length > 0) {
    posts.forEach((post, index) => {
      const next =
        index === 0
          ? null
          : {
              slug: posts[index - 1].node.slug,
              title: posts[index - 1].node.title,
            };
      const previous =
        index === posts.length - 1
          ? null
          : {
              slug: posts[index + 1].node.slug,
              title: posts[index + 1].node.title,
            };

      actions.createPage({
        component: blogPostComponent,
        path: `/blog/${post.node.slug}`,
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      });
    });
  }
};

type AllBlogSlugsResponse = {
  allContentfulBlogPost: {
    edges: {
      node: {
        slug: string;
        title: string;
      };
    }[];
  };
};
