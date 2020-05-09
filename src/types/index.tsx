import Database from "database/indexedDB";
import Translations from "translations/";
import { Theme } from "@material-ui/core/styles";
import { InputProps } from "@material-ui/core/Input";

export interface I_Input extends InputProps {
  helper?: string;
  label?: string;
}

export type T_KeyStringObj = {
  [key: string]: any;
};

export type T_Language = "fr_FR" | "en_US";

export type T_State = {
  db: Database;
  theme: Theme;
  trans: Translations;
};

export type T_Action =
  | { type: "ADD" }
  | { type: "CREATE"; create: object }
  | { type: "DELETE"; id: string };
