import React from "react";
import AppInterface from "components/AppInterface/AppInterface";
import AppContainer from "components/AppContainer/AppContainer";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "styles/MuiTheme";
import AppContext, { reducer, initialState } from "contexts/AppContext";
import { T_State } from "types/";

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const initializeDB = async (state: T_State) => {
      const res = await state.db.initialize();
      console.log(res);
      state.db.resetDB();
    };
    initializeDB(state);
  });

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
