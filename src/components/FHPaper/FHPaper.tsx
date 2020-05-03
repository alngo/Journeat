import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  children?: React.ReactElement;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "100%",
  },
}));

const FHPaper = (props: Props) => {
  const classes = useStyles();
  const { children } = props;

  return <Paper className={classes.paper}>{children}</Paper>;
};

export default FHPaper;
