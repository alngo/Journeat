import React from "react";
import Database from "database/Database";
import Profile from "database/classes/Profile";
import theme from "styles/MuiTheme";
import Translations from "translations/";
import { T_State, T_Action } from "types/";

const db = new Database();

const initialState: T_State = {
  db: db,
  profile: new Profile(db),
  translation: new Translations("fr_FR"),
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
    case "setLoading":
      return { ...state, loading: action.payload };
    case "setError":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default AppContext;
export { reducer, initialState };
