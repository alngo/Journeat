import Database from "./database";
import Profile from "./schemas/profile";
import Setting from "./schemas/setting";
import Food from "./schemas/food";
import Calorie from "./schemas/calorie";
import Weight from "./schemas/weight";

const Schemas = [Profile, Setting, Food, Calorie, Weight];

export default Database;
export { Schemas };
