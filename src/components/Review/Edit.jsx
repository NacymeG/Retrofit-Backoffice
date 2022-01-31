import { Edit, SimpleForm, TextInput } from 'react-admin';

const ReviewEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextInput source="content" />
        <TextInput source="rating" />
        <TextInput source="firstname" />
        <TextInput source="lastname" />
      </SimpleForm>
    </Edit>
  );
};

export default ReviewEdit;
