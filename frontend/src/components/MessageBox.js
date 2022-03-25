import Alert from '@mui/material/Alert';

const MessageBox = (props) => {
  return (
    <Alert variant="outlined" severity={props.severity || 'info'}>
      {props.children}
    </Alert>
  );
};

export default MessageBox;

// import Alert from 'react-bootstrap/Alert';

// export default function MessageBox(props) {
//   return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
// }
