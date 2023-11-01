import { Image } from "../image/Image";
import { Post } from "../post/Post";
import { JsonValue } from "type-fest";

export type User = {
  avatar?: Image | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  posts?: Array<Post>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
