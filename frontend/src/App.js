import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import { Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header className="App-header">
          <LinkContainer to="/">
            <Navbar.Brand>HTTP DOG</Navbar.Brand>
          </LinkContainer>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<Product />} />
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
