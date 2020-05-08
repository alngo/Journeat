import Database from "./database";
import Profile from "./schemas/profile";
import Setting from "./schemas/setting";
import Food from "./schemas/food";

const Schemas = [Profile, Setting, Food];

export default Database;
export { Schemas };
