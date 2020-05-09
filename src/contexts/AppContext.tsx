import React from "react";
import Database, { Schemas } from "database/indexedDB";
import theme from "styles/MuiTheme";
import Translations from "translations/";
import { T_State, T_Action } from "types/";

const initialState: T_State = {
  db: new Database("database", Schemas),
  trans: new Translations("fr_FR"),
  theme: theme,
};

const AppContext = React.createContext<{
  state: T_State;
  dispatch: React.Dispatch<T_Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: T_State, action: T_Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default AppContext;
export { reducer, initialState };
