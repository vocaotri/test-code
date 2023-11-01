import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ImageCreateInput = {
  posts?: PostWhereUniqueInput | null;
  url?: string | null;
  users?: UserWhereUniqueInput | null;
};
