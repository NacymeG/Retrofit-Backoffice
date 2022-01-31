import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const ReviewList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="content" />
        <TextField source="rating" />
        <TextField source="firstname" />
        <TextField source="lastname" />
        <EditButton basePath="/review" />
        <DeleteButton basePath="/review" />
      </Datagrid>
    </List>
  );
};

export default ReviewList;
