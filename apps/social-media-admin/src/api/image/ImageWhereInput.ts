import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ImageWhereInput = {
  id?: StringFilter;
  posts?: PostWhereUniqueInput;
  url?: StringNullableFilter;
  users?: UserWhereUniqueInput;
};
