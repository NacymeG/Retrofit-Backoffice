import {
  Edit,
  SimpleForm,
  DateInput,
  TextInput,
  // SelectInput,
  // ReferenceInput,
} from 'react-admin';

const NewsEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <DateInput
          source="date"
          locales="fr-FR"
          options={{
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }}
        />
        <TextInput source="description" />
        <TextInput source="image" />
        <TextInput source="source" />
      </SimpleForm>
    </Edit>
  );
};

export default NewsEdit;
