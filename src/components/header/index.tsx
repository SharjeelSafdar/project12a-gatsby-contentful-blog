import React, { FC } from "react";
import { Link } from "gatsby";
import { Button, Typography } from "@material-ui/core";

import { useStyles } from "./styles";

interface HeaderProps {
  siteTitle: string;
}

const Header: FC<HeaderProps> = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <header className={classes.container}>
      <div className={classes.innerContainer}>
        <Typography variant="h1" className={classes.heading}>
          <Link to="/" className={classes.link}>
            {siteTitle}
          </Link>
        </Typography>
        <ul className={classes.list}>
          <Link to="/" className={classes.link}>
            <Button className={classes.button}>Home</Button>
          </Link>
          <Link to="/blog" className={classes.link}>
            <Button className={classes.button}>Blog</Button>
          </Link>
          <Link to="/login" className={classes.link}>
            <Button className={classes.button}>Login</Button>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
