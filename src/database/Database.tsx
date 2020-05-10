import Dexie from "dexie";
import { IProfile, ISetting, IFood, IWeight, IIntake } from "./interfaces";

class Database extends Dexie {
  profiles: Dexie.Table<IProfile, number>;
  foods: Dexie.Table<IFood, number>;
  settings: Dexie.Table<ISetting, number>;
  weights: Dexie.Table<IWeight, number>;
  intakes: Dexie.Table<IIntake, number>;

  constructor() {
    super("JourneatDB");
    this.version(1).stores({
      profiles: "++id, firstname, lastname, age, height, weight",
      settings: "++id, profileId, treshold, language, theme",
      foods: "++id, name, measure, intake",
      weights: "++id, profileId, timestamp, value",
      intakes: "++id, profileId, foodId, timestamp, amount",
    });

    this.profiles = this.table("profiles");
    this.settings = this.table("settings");
    this.foods = this.table("foods");
    this.weights = this.table("weights");
    this.intakes = this.table("intakes");
  }
}

export default Database;
