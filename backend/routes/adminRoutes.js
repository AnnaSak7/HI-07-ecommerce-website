import express from 'express';
import Product from '../models/productModel.js';

const adminRouter = express.Router();

adminRouter.get('/', async (req, res) => {
  const orders = await Product.find({});
  res.send(orders);
});

adminRouter.get('/slug/:slug', async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
adminRouter.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

export default adminRouter;
