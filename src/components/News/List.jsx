import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const NewsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="date" />
        <TextField source="description" />
        <TextField source="image" />
        <TextField source="source" />
        <EditButton basePath="/news" />
        <DeleteButton basePath="/news" />
      </Datagrid>
    </List>
  );
};

export default NewsList;
