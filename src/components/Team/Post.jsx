import { Create, SimpleForm, TextInput } from 'react-admin';

const TeamPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
        <TextInput source="firstName" />
        <TextInput source="lastName" />
        <TextInput source="role" />
        <TextInput source="profilPic" />
        <TextInput source="linkedinUrl" />
      </SimpleForm>
    </Create>
  );
};

export default TeamPost;
