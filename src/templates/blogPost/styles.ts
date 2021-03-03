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
    text: {
      display: "-webkit-box",
      "-webkit-line-clamp": "5",
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    signInBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
    },
    signInBtn: {
      margin: theme.spacing(2, "auto"),
    },
    link: {
      textDecoration: "none",
      color: theme.palette.common.white,
    },
  })
);
