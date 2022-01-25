import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const CarsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="brand" />
        <TextField source="model" />
        <TextField source="image" />
        <TextField source="price" />
        <TextField source="VoteNbr" />
        <EditButton basePath="/cars" />
        <DeleteButton basePath="/cars" />
      </Datagrid>
    </List>
  );
};

export default CarsList;
