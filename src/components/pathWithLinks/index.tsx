import React, { FC } from "react";
import { Link } from "gatsby";
import { Typography } from "@material-ui/core";

import { useStyles } from "./styles";

interface PathWithLinksProps {
  path: string;
}

const PathWithLinks: FC<PathWithLinksProps> = ({ path }) => {
  const classes = useStyles();

  // Remove trailing "/" except for home directory
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  const slugs = path.split("/");
  let links = slugs.map((_, index) => slugs.slice(0, index + 1).join("/"));
  links[0] = "/";
  let pageNames = [...slugs];
  pageNames[0] = "home";
  pageNames = pageNames.map(fragment => {
    return fragment
      .split("-")
      .map(c => c[0].toUpperCase() + c.slice(1))
      .join(" ");
  });

  return (
    <ul className={classes.list}>
      {pageNames.map((fragment, index) => (
        <li key={fragment} className={classes.item}>
          <Link to={links[index]} className={classes.link}>
            <Typography variant="subtitle2" className={classes.text}>
              {fragment}
            </Typography>
          </Link>
          {index !== pageNames.length - 1 ? (
            <Typography
              variant="subtitle2"
              color="textSecondary"
              className={classes.text}
            >
              {" > "}
            </Typography>
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default PathWithLinks;
