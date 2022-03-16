import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Card } from 'react-bootstrap';

const Product = (props) => {
  const { product } = props;
  return (
    <Card className="product" key={product.slug}>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text>$ {product.price}</Card.Text>
        <Button size="small" variant="outlined">
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
