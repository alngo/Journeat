import React from "react";
import AppInterface from "components/AppInterface/AppInterface";
import AppContainer from "components/AppContainer/AppContainer";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "styles/MuiTheme";
import AppContext, { reducer, initialState } from "contexts/AppContext";
import Onboarding from "components/Onboarding/Onboarding";

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [onboarding, setOnboarding] = React.useState(false);

  React.useEffect(() => {
    const initialize = async () => {
      const profile = await state.profile.initialize_profile();
      if (!profile) setOnboarding(true);
    };
    initialize();
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>
        {onboarding && (
          <Onboarding
            isOpen={onboarding}
            handleClose={() => setOnboarding(false)}
          />
        )}
        <AppInterface />
        <AppContainer />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
