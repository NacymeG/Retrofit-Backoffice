import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const TeamList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="firstName" />
        <TextField source="lastName" />
        <TextField source="role" />
        <TextField source="ProfilPic" />
        <TextField source="linkedinUrl" />
        <EditButton basePath="/team" />
        <DeleteButton basePath="/team" />
      </Datagrid>
    </List>
  );
};

export default TeamList;
