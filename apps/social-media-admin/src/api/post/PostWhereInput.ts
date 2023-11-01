import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  title?: StringFilter;
  user?: UserWhereUniqueInput;
};
