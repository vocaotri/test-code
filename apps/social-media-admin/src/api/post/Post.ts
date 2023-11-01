import { User } from "../user/User";

export type Post = {
  content: string | null;
  createdAt: Date;
  id: string;
  thumbnail: string | null;
  title: string;
  updatedAt: Date;
  user?: User | null;
};
