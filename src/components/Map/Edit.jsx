import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';

const MapEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextInput source="type" />
        <TextInput source="name" />
        <TextInput source="streetNumber" />
        <TextInput source="street" />
        <TextInput source="postalCode" />
        <TextInput source="city" />
        <TextInput source="phone" />
      </SimpleForm>
    </Edit>
  );
};

export default MapEdit;
