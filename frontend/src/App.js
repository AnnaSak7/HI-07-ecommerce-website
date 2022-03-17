import { useContext } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import { Store } from './Store';
import { Nav, Navbar, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BiShoppingBag } from 'react-icons/bi';

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
            <Nav className="me-auto">
              <Link to="/cart" className="nav-link">
                <BiShoppingBag size="2rem" />
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0) > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.length}
                  </Badge>
                )}
              </Link>
            </Nav>
          </Navbar>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductPage />} />
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
