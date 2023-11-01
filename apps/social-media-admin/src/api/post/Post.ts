import { Image } from "../image/Image";
import { User } from "../user/User";

export type Post = {
  content: string | null;
  createdAt: Date;
  id: string;
  thumbnail?: Image | null;
  title: string;
  updatedAt: Date;
  user?: User | null;
};
