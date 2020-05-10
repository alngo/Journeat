import React from "react";
import AppInterface from "components/AppInterface/AppInterface";
import AppContainer from "components/AppContainer/AppContainer";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "styles/MuiTheme";
import AppContext, { reducer, initialState } from "contexts/AppContext";

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>
        <AppInterface />
        <AppContainer />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
