import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
// import bcrypt from 'bcryptjs';
// import { generateToken } from '../utils.js';

const userRouter = express.Router();

// userRouter.post(
//   '/signin',
//   // WHEN THERE IS AN ERROR, THE MIDDLEWARE (IN SERVER.JS) WILL RUN AND THE ERROR MESSAGE WILL BE RETURNED TO THE USER
//   expressAsyncHandler(async (req, res) => {
//     const user = await User.findOne({ email: req.body.email });
//     if (user) {
//       // FIRST PARAM => PLAIN TEXT PW, SECOND PARAM => ENCRYPTED PW IN THE DATABASE
//       if (bcrypt.compareSync(req.body.password, user.password)) {
//         res.send({
//           _id: user._id,
//           name: user.name,
//           email: user.email,
//           isAdmin: user.isAdmin,
//           token: generateToken(user),
//         });
//         // RETURN BECAUSE NO NEED TO RUN THE CODE AFTER SENDING DATA AFTER EMAIL OR PW IS INCORRECT
//         return;
//       }
//     }
//     res.status(401).send({ message: 'Invalid email or Password' });
//   })
// );

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      // if (bcrypt.compareSync(req.body.password === user.password))
      if (req.body.password === user.password) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        });
        // 1. plain text pw 2.encrypted pw in data
        // if (bcrypt.compareSync(req.body.password, user.password)) {
        //   res.send({
        //     _id: user._id,
        //     name: user.name,
        //     email: user.email,
        //     isAdmin: user.isAdmin,
        //     token: generateToken(user),
        //   });
        return;
      }
    }
    res.status(401).send({ message: 'Invalid email or password' });
  })
);

userRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  })
);

export default userRouter;
