import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
  DateInput,
} from 'react-admin';

const NewsPost = (props) => {
  return (
    <Create title="Create" {...props}>
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
        <ImageInput
          source="pictures"
          label="Related pictures"
          accept="image/*"
          placeholder={<p>Drop your file here</p>}
        >
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};

export default NewsPost;
