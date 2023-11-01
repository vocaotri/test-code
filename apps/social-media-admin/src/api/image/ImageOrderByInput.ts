import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  postsId?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  usersId?: SortOrder;
};
