import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type UserWhereInput = {
  avatar?: ImageWhereUniqueInput;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  posts?: PostListRelationFilter;
  username?: StringFilter;
};
