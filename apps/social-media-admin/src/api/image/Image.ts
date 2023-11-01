import { Post } from "../post/Post";
import { User } from "../user/User";

export type Image = {
  createdAt: Date;
  id: string;
  posts?: Post | null;
  updatedAt: Date;
  url: string | null;
  users?: User | null;
};
