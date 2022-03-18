import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Kaiya',
      email: 'kaiya@kaiken.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Mato',
      email: 'Mato@kaiken.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      _id: '1',
      name: '100 CONTINUE',
      slug: '100-continue',
      category: 'Poster',
      image: '/images/100.jpg',
      price: 100,
      countInStock: 10,
      breed: 'Kaiken',
      rating: 5,
    },
    {
      _id: '2',
      name: '200 OK',
      slug: '200-ok',
      category: 'Poster',
      image: '/images/200.jpg',
      price: 100,
      countInStock: 5,
      breed: 'Kaiken',
      rating: 4,
    },
    {
      _id: '3',
      name: '301 MOVED PERMANENTLY',
      slug: '301-moved-permanently',
      category: 'Poster',
      image: '/images/301.jpg',
      price: 110,
      countInStock: 2,
      breed: 'Kaiken',
      rating: 4.5,
    },
    {
      _id: '4',
      name: '404 NOT FOUND',
      slug: '404-not-found',
      category: 'Poster',
      image: '/images/404.jpg',
      price: 150,
      countInStock: 0,
      breed: 'Kaiken',
      rating: 4.8,
    },
  ],
};

export default data;
