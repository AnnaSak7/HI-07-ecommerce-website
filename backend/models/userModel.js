import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, defualt: false, required: true },
  },
  {
    // timestamps will have record of the last update time and crete time
    timestamps: true,
  }
);

const User = mongoose.model('user', userSchema);

export default User;