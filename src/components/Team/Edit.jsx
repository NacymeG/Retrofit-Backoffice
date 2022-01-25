import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';

const TeamEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextInput source="firstName" />
        <TextInput source="lastName" />
        <TextInput source="role" />
        <TextInput source="ProfilPic" />
        <TextInput source="linkedinUrl" />
      </SimpleForm>
    </Edit>
  );
};

export default TeamEdit;
