import React from 'react';
import AppBar from "components/AppBar/AppBar";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "styles/MuiTheme";
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '100px',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <div className={classes.root}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
