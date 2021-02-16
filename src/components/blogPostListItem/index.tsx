import React, { FC } from "react";
import Img from "gatsby-image";
import { Typography } from "@material-ui/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { PostType } from "../../types/types";
import { useStyles } from "./styles";

interface BlogPostProps {
  post: PostType;
}

const BlogPost: FC<BlogPostProps> = ({ post }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Img fluid={post.featuredImage.fluid} />
      </div>
      <div className={classes.right}>
        <Typography variant="h5" component="h2" className={classes.heading}>
          {post.title}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {post.publishDate}
        </Typography>
        <Typography variant="body2" className={classes.text}>
          {documentToReactComponents(JSON.parse(post.excerpt.raw))}
        </Typography>
      </div>
    </div>
  );
};

export default BlogPost;
