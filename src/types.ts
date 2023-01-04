export enum ElixirDifficulty {
  Unknown = "Unknown",
  Advanced = "Advanced",
  Moderate = "Moderate",
  Beginner = "Beginner",
  OrdinaryWizardingLevel = "OrdinaryWizardingLevel",
  OneOfAKind = "OneOfAKind",
}

export interface ElixirResponse {
  //todo uuid
  id: string;
  name: string;
  effect: string;
  sideEffects: string;
  characteristics: string;
  time: string;
  difficulty: ElixirDifficulty;
  ingredients: Ingredients[];
  inventors: Inventors[];
  manufacturer: "string";
}

export interface Ingredients {
  id: string;
  name: string;
}

export interface Inventors {
  id: string;
  firstName: string;
  lastName: string;
}
