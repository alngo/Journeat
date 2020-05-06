import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

interface Props extends React.ComponentProps<typeof Paper> {
  children?: React.ReactElement;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const FHPaper = (props: Props) => {
  const classes = useStyles();
  const { children, ...other } = props;

  return (
    <Paper className={classes.paper} {...other}>
      {children}
    </Paper>
  );
};

export default FHPaper;
