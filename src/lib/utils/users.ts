import { users } from "../../consts";
import { User } from "../../types";

export const getUserById = (userId: number): User => {
  return users.filter((user) => user.id === userId)[0];
};
