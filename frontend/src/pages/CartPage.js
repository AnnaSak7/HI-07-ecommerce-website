import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Store } from '../Store';
import MessageBox from '../components/MessageBox';
import { Helmet } from 'react-helmet-async';
import { Button, Row, Col, ListGroup, Card } from 'react-bootstrap';
import { BiMinus, BiPlus, BiTrash } from 'react-icons/bi';

export default function CartPage() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const checkoutHandler = () => {
    navigate('/signin?redirect=/shipping');
  };

  return (
    <div>
      <Helmet>
        <title>Shopping Cart</title>9
      </Helmet>
      <h1>Shopping Cart</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="align-items-center">
                    <Col md={5}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      />{' '}
                      <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    </Col>
                    <Col md={3} className="minusPlus">
                      <Button
                        variant="outline-dark"
                        disabled={item.quantity === 1}
                        onClick={() => {
                          updateCartHandler(item, item.quantity - 1);
                        }}
                      >
                        <BiMinus />
                      </Button>{' '}
                      <span>{item.quantity}</span>{' '}
                      <Button
                        variant="outline-dark"
                        disabled={item.quantity === item.countInStock}
                        onClick={() => {
                          updateCartHandler(item, item.quantity + 1);
                        }}
                      >
                        <BiPlus />
                      </Button>
                    </Col>
                    <Col md={2}>{item.price} kr</Col>
                    <Col md={2}>
                      <Button
                        variant="outline-dark"
                        onClick={() => removeItemHandler(item)}
                      >
                        <BiTrash />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={'4'}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <h3>
                  Subtotal ( {cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                  items) :
                  {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)} kr
                </h3>

                <div className="d-grid">
                  <Button
                    type="button"
                    variant="dark"
                    onClick={checkoutHandler}
                    disabled={cartItems.length === 0}
                  >
                    Check Out
                  </Button>
                </div>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
