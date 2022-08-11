import { User } from "../models/user";
import { atom } from "recoil";

const animals = [
  "bear", "cat", "chicken", "deer", "doberman", "dog", "fox", "giraffe", "koala", "lion", "monkey", "owl", "panda", "polar-bear", "rabbit", "sea-lion", "snake"
]

const num = Math.floor(Math.random() * 1000000)

export const userAtom = atom<User>({
  key: "user",
  default: {
    userId: num,
    userName: animals[(num) % animals.length]
  }
});
