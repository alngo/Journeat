import React from 'react';
import AppBar from "components/AppBar/AppBar";
import AppDrawer from "components/AppDrawer/AppDrawer";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "styles/MuiTheme";

const AppInterface = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <AppBar isOpen={isOpen} setOpen={setOpen}/>
      <AppDrawer isOpen={isOpen} setOpen={setOpen}/>
    </React.Fragment>
  )
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppInterface />
    </ThemeProvider>
  );
}

export default App;
