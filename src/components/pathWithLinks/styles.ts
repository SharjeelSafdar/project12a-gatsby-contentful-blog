import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme =>
  createStyles({
    list: {
      margin: theme.spacing(1, 0),
      listStyle: "none",
    },
    item: {
      display: "inline",
      margin: theme.spacing(1, 0),
    },
    link: {
      textDecoration: "none",
      color: theme.palette.text.secondary,
    },
    text: {
      display: "inline",
    },
  })
);
