import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme =>
  createStyles({
    list: {
      listStyle: "none",
      marginLeft: 0,
    },
    link: {
      textDecoration: "none",
      color: theme.palette.common.black,
    },
  })
);
