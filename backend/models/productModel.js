import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    _id: { type: String },
    name: { type: String, required: true, unique: true },
    number: { type: Number, required: true },
    description: { type: String, require: true },
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
