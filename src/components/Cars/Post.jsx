import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
  DateInput,
} from 'react-admin';

const CarsPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
        <DateInput source="published_at" />
        <TextInput source="brand" />
        <TextInput source="model" />
        <TextInput source="price" />
        <TextInput source="pictures" />
        <TextInput source="imageAnnex1" />
        <TextInput source="availability" />
        <TextInput source="autonomy" />
        <TextInput source="maxSpeed" />
        <TextInput source="economy" />
        <TextInput source="imageHistory" />
        <TextInput source="titleHistory" />
        <TextInput source="carHistory" />
        <TextInput source="powerMotor" />
        <TextInput source="titleAdvantage" />
        <TextInput source="descAdvantage" />
        <TextInput source="options" />
        <TextInput source="EnergyBatt1" />
        <TextInput source="EnergyBatt2" />
        <TextInput source="EnergyBatt3" />
        <TextInput source="priceWithoutRetrofit" />
        <TextInput source="isPreorder" />
        <TextInput source="gpsOption" />
        <TextInput source="gpsPrice" />
        <TextInput source="imageMaster" />
        <TextInput source="imageDescription" />
        <TextInput source="imageConfiguration" />
        <TextInput source="imageAnnex2" />
        <TextInput source="imageAnnex3" />
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

export default CarsPost;
