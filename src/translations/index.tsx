import { T_KeyStringObj, T_Language } from "types/";

const fr_FR = {
  firstname: "prénom",
  lastname: "nom",
  age: "age",
  weight: "poids",
  height: "taille",
  submit: "valider",
  intake: "apport",
};

class Translations {
  private translations: T_KeyStringObj<T_KeyStringObj<String>>;
  language: T_Language;

  constructor(language: T_Language) {
    this.translations = {
      fr_FR: fr_FR,
    };
    this.language = language;
  }

  get words() {
    return this.translations[this.language];
  }
}

export default Translations;
