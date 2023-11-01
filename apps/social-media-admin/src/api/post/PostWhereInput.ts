import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  thumbnail?: ImageWhereUniqueInput;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
