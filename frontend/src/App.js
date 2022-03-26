import { useContext } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { Store } from './Store';
import { Nav, Navbar, Badge, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BiShoppingBag } from 'react-icons/bi';
//import { BiUserCircle } from 'react-icons/bi';

import SigninPage from './pages/SigninPage';
import SearchBox from '../src/components/SearchBox';
import ShippingAddressPage from './pages/ShippingAddressPage';
import SignupPage from './pages/SignupPage';
import PaymentMethodPage from './pages/PaymentMethodPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderPage from './pages/OrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="top-center" limit={1} />
        <header className="App-header">
          <Navbar
            style={{ backgroundColor: '#000' }}
            variant="dark"
            expand="lg"
          >
            <LinkContainer to="/">
              <Navbar.Brand>HTTP DOG POSTERS</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {/* <div>
              <Routes>
                <Route
                  render={({ history }) => <SearchBox history={history} />}
                ></Route>
              </Routes>
            </div> */}

              {/* <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Shop</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav> */}

              <Nav className="me-auto w-100 justify-content-end">
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                )}
                {/* <Nav.Item>
                <Link to="/user" className="nav-link">
                  <BiUserCircle size="2rem" padding="0" color="#fff" />
                </Link>
              </Nav.Item> */}
                <Nav.Item>
                  <Link to="/cart" className="nav-link">
                    <BiShoppingBag size="2rem" padding="0" color="#fff" />
                    {cart.cartItems?.reduce((a, c) => a + c.quantity, 0) >
                      0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.length}
                      </Badge>
                    )}
                  </Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/shipping" element={<ShippingAddressPage />} />
            <Route path="/payment" element={<PaymentMethodPage />} />
            <Route path="/placeorder" element={<PlaceOrderPage />} />
            <Route path="/order/:id" element={<OrderPage />} />
            <Route path="/orderhistory" element={<OrderHistoryPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
