import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  loader: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
}));

export default function CircularUnderLoad() {
  const classes = useStyles();
  return (
    <div className={classes.loader}>
      <CircularProgress />;
    </div>
  );
}
