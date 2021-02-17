import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme =>
  createStyles({
    list: {
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `space-between`,
      listStyle: `none`,
      padding: 0,
      margin: theme.spacing(2, 0),
    },
  })
);
