import Alert from '@mui/material/Alert';

const MessageBox = (props) => {
  return (
    <Alert variant="outlined" severity="error">
      {props.children}
    </Alert>
  );
};

export default MessageBox;
