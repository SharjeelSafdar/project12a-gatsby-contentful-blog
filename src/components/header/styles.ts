import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      background: `rebeccapurple`,
      marginBottom: theme.spacing(4),
    },
    innerContainer: {
      margin: theme.spacing(0, "auto"),
      maxWidth: 960,
      padding: theme.spacing(2),
      display: "flex",
      justifyContent: "space-between",
    },
    heading: {
      margin: theme.spacing("auto", 0),
      fontSize: "2rem",
    },
    link: {
      textDecoration: "none",
      color: theme.palette.common.white,
    },
    list: {
      listStyle: "none",
      margin: theme.spacing("auto", 0),
      padding: 0,
    },
    button: {
      backgroundColor: "transparent",
      color: theme.palette.common.white,
      marginLeft: theme.spacing(1),
    },
  })
);
