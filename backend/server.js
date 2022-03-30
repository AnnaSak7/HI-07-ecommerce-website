import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import adminRouter from './routes/adminRoutes.js';
import orderRouter from './routes/orderRoutes.js';

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

// the form data in the post request will be converted to a JSON object inside req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// if paypal client id exists, send 'sb'(sandbox)
app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/admin', adminRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

//test
// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// });

// ERROR HANDLER FOR EXPRESS LIKE A MIDDLEWARE
// If there is an error in this function, you can handle it in the server tactics
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running @ http://localhost:${PORT}`);
});
