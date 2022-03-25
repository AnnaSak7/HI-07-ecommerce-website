import { useReducer, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import getError from '../utils';
import { ACTIONS, Store } from '../Store';
import { Breadcrumbs, Button, Link, Typography } from '@mui/material';
import { Badge } from 'react-bootstrap';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({
  width: '90%',
  marginBottom: '1rem',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 15,
  padding: '1rem 3rem',
  border: '1px solid',
  lineHeight: 1.5,
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

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProductPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, []);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: ACTIONS.CART_ADD_ITEM,
      payload: { ...product, quantity },
    });
    navigate('/cart');
  };

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox>{error}</MessageBox>
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <div className="imgContainer">
            <img className="img-large" src={product.image} alt={product.name} />
          </div>
        </Col>
        <Col md={6}>
          <Helmet>
            <title>{product.name}</title>
          </Helmet>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/">
              {product.category}
            </Link>
            <Typography color="text.primary">{product.name}</Typography>
          </Breadcrumbs>

          <h1>{product.number}</h1>
          <h2>
            <em>{product.description}</em>
          </h2>
          <p style={{ color: 'blue' }}>{product.price} kr</p>

          <p>
            {product.countInStock > 0 ? (
              <Badge bg="dark">In Stock</Badge>
            ) : (
              <Badge bg="danger">Out of Stock</Badge>
            )}
          </p>

          <CustomButton
            onClick={addToCartHandler}
            variant="contained"
            disableRipple
            size="large"
          >
            Add to cart
          </CustomButton>
          <CustomButton
            onClick={addToCartHandler}
            variant="contained"
            disableRipple
            size="large"
          >
            Buy it now
          </CustomButton>
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;
