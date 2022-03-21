import { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Card } from 'react-bootstrap';
import { styled } from '@mui/material/styles';
import { Store } from '../Store';

const CustomButton = styled(Button)({
  width: '80%',
  marginBottom: '1rem',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  border: '1px solid',
  backgroundColor: '#000',
  borderColor: '#000',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#fff',
    borderColor: '#000',
    color: '#000',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#fff',
    borderColor: '#000',
    color: '#000',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const Product = (props) => {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (item) => {
    //check if some items are in the cart
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    // Ajax request for the current product
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
  };

  return (
    <Card className="product" key={product.slug}>
      <div className="imgContainer">
        <Link to={`/product/${product.slug}`}>
          <img src={product.image} alt={product.name} />
        </Link>
      </div>
      <Card.Body>
        <Link
          to={`/product/${product.slug}`}
          style={{ textDecoration: 'none', color: '#000' }}
        >
          <Card.Title style={{ fontSize: '1.5rem' }}>
            {product.number}
          </Card.Title>
          <Card.Text style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
            {product.description}
          </Card.Text>
        </Link>
        <Card.Text style={{ color: 'blue' }}>{product.price} kr</Card.Text>
        {product.countInStock === 0 ? (
          <CustomButton
            onClick={addToCartHandler}
            variant="contained"
            size="small"
            disabled
          >
            OUT OF STOCK
          </CustomButton>
        ) : (
          <CustomButton
            onClick={addToCartHandler}
            variant="contained"
            size="small"
          >
            ADD TO CART
          </CustomButton>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
