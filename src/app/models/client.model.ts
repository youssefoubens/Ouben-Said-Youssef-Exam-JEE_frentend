import { Credit } from "./credit.model";

export interface Client {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    credits?: Credit[]; // Optional relation to credits
  }