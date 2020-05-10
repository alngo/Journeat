import Database from "database/Database";
import Profile from "database/classes/Profile";
import Translations from "translations/";
import { Theme } from "@material-ui/core/styles";
import { InputProps } from "@material-ui/core/Input";

export interface I_Input extends InputProps {
  helper?: string;
  label?: string;
}

export type T_KeyStringObj<T> = {
  [key: string]: T;
};

export type T_Language = "fr_FR" | "en_US";

export type T_State = {
  db: Database;
  profile: Profile;
  translation: Translations;
  theme: Theme;
};

export type T_Action =
  | { type: "setLoading"; payload: boolean }
  | { type: "setError"; payload: boolean };
