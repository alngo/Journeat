export interface IProfile {
  id?: number;
  firstname: string;
  lastname: string;
  age: number;
  height: number;
}

export interface ISetting {
  id?: number;
  profileId: number;
  treshold: number;
  language: string;
  theme: string;
}

export interface IWeight {
  id?: number;
  profileId: number;
  timestamp: number;
  value: number;
}

export interface IIntake {
  id?: number;
  profileId: number;
  foodId: number;
  timestamp: number;
  amount: number;
}

export interface IFood {
  id?: number;
  name: string;
  measure: "ml" | "g";
  intake: number;
}
