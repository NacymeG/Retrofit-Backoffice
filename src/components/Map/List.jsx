import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const MapList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="type" />
        <TextField source="name" />
        <TextField source="streetNumber" />
        <TextField source="street" />
        <TextField source="postalCode" />
        <TextField source="city" />
        <TextField source="phone" />
        <EditButton basePath="/localisation" />
        <DeleteButton basePath="/localisation" />
      </Datagrid>
    </List>
  );
};

export default MapList;
