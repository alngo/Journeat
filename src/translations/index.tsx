import { T_KeyStringObj, T_Language } from "types/";

const fr_FR = {
  firstname: "prénom",
  lastname: "nom",
  age: "age",
  weight: "poids",
  height: "taille",
};

class Translations {
  private translations: T_KeyStringObj;
  language: T_Language;

  constructor(language: T_Language) {
    this.translations = {
      fr_FR: fr_FR,
    };
    this.language = language;
  }
}

export default Translations;
