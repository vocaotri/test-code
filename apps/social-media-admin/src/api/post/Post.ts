import { Image } from "../image/Image";
import { User } from "../user/User";

export type Post = {
  content: string | null;
  createdAt: Date;
  id: string;
  thumbnail?: Image | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
