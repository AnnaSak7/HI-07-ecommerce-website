import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();

//connecting to mongodb
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
//test
// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running @ http://localhost${PORT}`);
});
