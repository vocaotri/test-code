import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  content?: string | null;
  thumbnail?: ImageWhereUniqueInput | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
