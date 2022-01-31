import { Create, SimpleForm, TextInput } from 'react-admin';

const ReviewPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
        <TextInput source="content" />
        <TextInput source="rating" />
        <TextInput source="firstname" />
        <TextInput source="lastname" />
      </SimpleForm>
    </Create>
  );
};

export default ReviewPost;
