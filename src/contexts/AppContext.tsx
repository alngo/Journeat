import React from "react";
import Database, { Schemas } from "database/indexedDB";
import theme from "styles/MuiTheme";

export type T_State = {
  db: Database;
  theme: any;
  language: "fr_FR" | "en_US";
  translation: any;
};

export type T_Action =
  | { type: "ADD" }
  | { type: "CREATE"; create: object }
  | { type: "DELETE"; id: string };

const initialState: T_State = {
  db: new Database("database", Schemas),
  theme: theme,
  language: "fr_FR",
  translation: "qwe",
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
