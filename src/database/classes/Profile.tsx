import { IProfile } from "database/interfaces";
import Database from "database/Database";

class Profile implements IProfile {
  id?: number;
  db: Database;
  firstname!: string;
  lastname!: string;
  age!: number;
  height!: number;

  constructor(db: Database, id?: number) {
    this.db = db;
    this.id = id || 0;
  }

  initialize_profile = async () => {
    const profile = await this.db.profiles.get(0);
    if (profile) {
      this.firstname = profile.firstname;
      this.lastname = profile.lastname;
      this.age = profile.age;
      this.height = profile.height;
    }
    return profile;
  };
}

export default Profile;
