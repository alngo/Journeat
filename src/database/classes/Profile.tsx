import { IProfile, ISetting, IWeight, IIntake } from "database/interfaces";
import Database from "database/Database";

class Profile implements IProfile {
  id?: number;
  db: Database;
  firstname!: string;
  lastname!: string;
  age!: number;
  height!: number;
  setting?: ISetting;
  weights?: Array<IWeight>;
  intakes?: Array<IIntake>;

  constructor(db: Database, id?: number) {
    this.db = db;
    this.id = id;
  }

  initialize = async () => {
    if (this.id) {
      this.setting = await this.db.settings
        .where("profileId")
        .equals(this.id)
        .first();
      this.weights = await this.db.weights
        .where("profileId")
        .equals(this.id)
        .toArray((weights: Array<IWeight>) => (this.weights = weights));
      this.intakes = await this.db.intakes
        .where("profileId")
        .equals(this.id)
        .toArray((intakes: Array<IIntake>) => (this.intakes = intakes));
    }
  };
}

export default Profile;
