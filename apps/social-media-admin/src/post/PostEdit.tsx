import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ImageTitle } from "../image/ImageTitle";
import { UserTitle } from "../user/UserTitle";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Content" source="content" />
        <ReferenceInput
          source="thumbnail.id"
          reference="Image"
          label="Thumbnail"
        >
          <SelectInput optionText={ImageTitle} />
        </ReferenceInput>
        <TextInput label="Title" multiline source="title" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
