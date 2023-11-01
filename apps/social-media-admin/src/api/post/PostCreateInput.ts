import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  content?: string | null;
  thumbnail?: ImageWhereUniqueInput | null;
  title: string;
  user?: UserWhereUniqueInput | null;
};
