import React from "react";
import Container from "@material-ui/core/Container";
import ChartCalorie from "components/ChartCalorie/ChartCalorie";
import ChartWeight from "components/ChartWeight/ChartWeight";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    height: "100vh",
    flexGrow: 1,
    overflow: "auto",
    display: "flex",
  },
}));

const AppContainer = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Container maxWidth="xl">
        <ChartCalorie height="60%" />
        <ChartWeight height="30%" />
      </Container>
    </main>
  );
};

export default AppContainer;
