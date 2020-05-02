import React from 'react';
import AppInterface from "components/AppInterface/AppInterface";
import AppContainer from "components/AppContainer/AppContainer";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "styles/MuiTheme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppInterface />
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;
