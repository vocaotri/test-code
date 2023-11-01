import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ImageWhereInput = {
  id?: StringFilter;
  posts?: PostWhereUniqueInput;
  users?: UserWhereUniqueInput;
};
