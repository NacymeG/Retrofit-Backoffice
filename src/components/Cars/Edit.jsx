import {
  Edit,
  SimpleForm,
  TextField,
  TextInput,
  // SelectInput,
  // ReferenceInput,
} from 'react-admin';

const CarsEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextInput source="VoteNbr" />
        <TextInput source="brand" />
        <TextInput source="model" />
        <TextInput source="image" />
        <TextInput source="price" />
        <TextInput source="VoteNbr" />
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
      </SimpleForm>
    </Edit>
  );
};

export default CarsEdit;
