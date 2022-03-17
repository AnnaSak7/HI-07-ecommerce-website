import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
  },
  {
    // timestamps will have record of the last update time and crete time
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
