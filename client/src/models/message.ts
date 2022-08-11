import { User } from "./user";

export type Message = {
  content: string;
  user: User;
  createdAt: number;
};
