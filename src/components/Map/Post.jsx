import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

const CarsPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
        <DateInput source="published_at" />
        <TextInput source="type" />
        <TextInput source="name" />
        <TextInput source="streetNumber" />
        <TextInput source="street" />
        <TextInput source="postalCode" />
        <TextInput source="city" />
        <TextInput source="phone" />
      </SimpleForm>
    </Create>
  );
};

export default CarsPost;
