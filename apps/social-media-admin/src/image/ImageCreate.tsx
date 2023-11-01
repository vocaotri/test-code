import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { PostTitle } from "../post/PostTitle";
import { UserTitle } from "../user/UserTitle";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="posts.id" reference="Post" label="Posts">
          <SelectInput optionText={PostTitle} />
        </ReferenceInput>
        <TextInput label="Url" source="url" />
        <ReferenceInput source="users.id" reference="User" label="Users">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
