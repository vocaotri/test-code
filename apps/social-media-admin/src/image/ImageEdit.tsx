import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { PostTitle } from "../post/PostTitle";
import { UserTitle } from "../user/UserTitle";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="posts.id" reference="Post" label="Posts">
          <SelectInput optionText={PostTitle} />
        </ReferenceInput>
        <TextInput label="Url" source="url" />
        <ReferenceInput source="users.id" reference="User" label="Users">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
