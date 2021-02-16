import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: "flex",
      marginBottom: theme.spacing(3),
    },
    left: {
      flex: "25%",
      marginRight: "1rem",
      marginTop: theme.spacing(1),
    },
    right: {
      flex: "75%",
    },
    heading: {
      color: theme.palette.primary.main,
    },
    text: {
      display: "-webkit-box",
      "-webkit-line-clamp": "2",
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  })
);
