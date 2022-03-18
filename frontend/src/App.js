import { useContext } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { Store } from './Store';
import { Nav, Navbar, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BiShoppingBag } from 'react-icons/bi';
import { BiUserCircle } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';
import SigninPage from './pages/SigninPage';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <LinkContainer to="/">
              <Navbar.Brand>HTTP DOG</Navbar.Brand>
            </LinkContainer>
            <BiSearch size="2rem" padding="0" color="#fff" />

            <Nav className="justify-content-center" activeKey="/home">
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
            </Nav>

            <Nav className="justify-content-end">
              <Nav.Item>
                <Link to="/user" className="nav-link">
                  <BiUserCircle size="2rem" padding="0" color="#fff" />
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/cart" className="nav-link">
                  <BiShoppingBag size="2rem" padding="0" color="#fff" />
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0) > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.length}
                    </Badge>
                  )}
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/signin" element={<SigninPage />} />
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
