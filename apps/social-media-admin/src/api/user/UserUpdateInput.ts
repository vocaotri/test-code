import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  avatar?: ImageWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  posts?: PostUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
