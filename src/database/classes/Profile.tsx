import { IProfile } from "database/interfaces";
import Database from "database/Database";

class Profile implements IProfile {
  id!: number;
  db: Database;
  firstname!: string;
  lastname!: string;
  gender!: string;
  age!: number;
  height!: number;

  constructor(db: Database, id?: number) {
    this.db = db;
    this.id = id || 1;
  }

  initialize_profile = async () => {
    const profile = await this.db.profiles.get(this.id);
    if (profile) {
      this.firstname = profile.firstname;
      this.lastname = profile.lastname;
      this.gender = profile.gender;
      this.age = profile.age;
      this.height = profile.height;
    }
    return profile;
  };

  create = async (item: IProfile) => {
    const id = await this.db.profiles.add(item, this.id);
    this.id = id;
    this.firstname = item.firstname;
    this.lastname = item.lastname;
    this.gender = item.gender;
    this.age = item.age;
    this.height = item.height;
    return id;
  };

  addWeight = async (weight: number) => {
    if (this.id) {
      await this.db.weights.add({
        profileId: this.id,
        timestamp: Date.now(),
        value: weight,
      });
    }
  };
}

export default Profile;
