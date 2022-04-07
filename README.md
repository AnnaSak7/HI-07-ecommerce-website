# HYPER ISLAND BRIEF 07

### MERN ECOMMERCE WEBSITE

https://http-dog-posters.herokuapp.com/

## Brief : SHOPPING

The undisclosed brick and mortar store has decided it's time to go online! To be able to give all their customers the best experience, regardless if they're buying from their ph9one or their smart speaker they want an API to easily support and extend their offering.

REQUIREMENTS :

- There need to be at least one way for customers to interact with their new API
- Customers should be able to find available products
- Customers should be able to create a shopping cart
- Should be possible to create an order with a shopping cart or a single item
- Workers at the store should be able to mark orders as packed and shipped

## NOTES:

### setup

"name": "frontend",
"proxy": "http://localhost:5000"
in frontend package.json

### FetchProducts From Backend

- set proxy in package.json (need to set the proxy in package.json to access to backend in the frontend)
- npm install axios
- use effect hook
- use reducer hook

### Manage State By Reducer Hook

- define reducer
- update fetch data
- get state from useReducer

### Bootstrap

- npm install react-bootstrap _bootstrap version_
- npm install react-router-bootstrap ...for _LinkContainer_

Don't forget to import Bootstrap in index.js _import 'bootstrap/dist/css/bootstrap.min.css_

### Create Product Details Page

- fetch product from backend
- create 3 columns for image, info, action

### Change names of headings

- npm install react-helmet-async
- _<HelmetProvider> <Helmet><title>some title</title</Helmet>_ (changes tab title)

### Loading and Message Component

- create loading component
- use spinner component
- create message component
- create utils.js to define getError function

### Connect to MongoDB Database

- npm install mongoose (MongoDB object modeling to connect with MongoDB)
- npm install dotenv (to load .env file in the node application)

### Seed data

- create Product model
- create User model
- create seed route
- use route in server.js
- seed sample product

### Implement Add to Cart

- create react context (to manage state globally)
- define reducer
- create store provider
- implement add to cart button click handler

- check exist item in the cart
- check count in stock in backend

### Cart page

- create 2 columns
- display items list
- create action column
- click handler for inc/dec item
- click handler for remove item
- click handler for checkout

### sign in page

- create sign in form
- add email and password
- add sign-in button

-- npm i bcryptjs

### Sign in backend API

- create signin api
- npm install jsonwebtoken
- define generateToken

-- npm install express-async-handler
(you can catch error in the async function inside this. If there is an error in this function, you can handle it in the server tactics ----Saves you writing your own try/catch for async/await and passes error on to next)

-- npm install jsonwebtoken
(sending a token along with the object in res.send)

-- add Advanced Rest Client in Chrome

### Complete sign in page with functionality

- handle submit action
- save token in store and local storage
- show user name in header

-- npm i react-toastify
(adding nicer notifications)
App.js : import 'react-toastify/dist/ReactToastify.css'
<ToastContainer position="bottom-center" limit={1} />
SigninPage.js : toast.error(getError(err));

### Shipping page

- create form inputs
- handle save shipping address
- add checkout wizard bar

### Sign up page

- create input forms
- handle submit
- create backend api

### Implement select payment method page

- create input form
- handle submit

### Place order page

- show cart items, payment and address
- handle place order action
- create order create api

### Place order action

- handle place order action
- create oder create api

-- when 'authorization: Bearer undefine', check localStorage to see if the user information is correctly stored.
-- when taking out hard coded \_id from data.js, check the schema. (it was \_id: { type: String } when I get error message. take that out then it will generate objectID)

### Order Screen

- create backend api for oder/:id
- fetch order api in frontend
- show order information in 2 columns

### Pay order by PayPal

developer.paypal.com
login / dashboard / use sandbox for testing

- generate paypal client id
  (developer.paypal.com
  login / dashboard / use sandbox for testing)
  copy client id and put it in .env
- create api to return client id
  in server.js ->
  app.get('/api/keys/paypal', (req, rest) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
  });
- install react-paypal-js (in frontend folder)
  npm install @paypal/react-paypal-js
- use PayPalScriptProvider in index.js
  in index.js
  <PayPalScriptProvider deferLoading={true}>
  <App />
  </PayPalScriptProvider>
- use usePayPalScriptReducer in Order page
- implement loadPayPalScript function
- render paypal button
- implement onApprove payment function
- create pay order api in backend

### Order History

- create order page
- create order history api
- use api in the frontend9

### Profile page

- get user info from content
- show user information
- create user update api
- update user info

### Side bar and search box

- add sidebar
- add search box

### Search page

- show filters
- create api for searching products
- display results

### Admin menu

- define protected route component
- define admin route component
- add menu for admin in header

### Dashboard page

- create dashboard ui
- implement backend api
- connect ui to backend

### Manage products in admin area

- create products list ui
- implement backend api
- fetch data

### Create Product feature in admin

- create products button
- implement backend api
- handle on click

### Edit product in admin

- create edit button
- create edit product ui
- display product info in the input boxes

### Implement update product in admin

- create edit product backend api
- handle update click

### Delete product

- show delete button
- implement backend api
- handle on click

### List Orders in admin

- create order list page
- implement backend api
- fetch and display orders

### Ship order

- add ship button
- handle click action
- implement backend api for shipping

### Delete order

- add delete button (orderListPage)
- handle click action
- implement backend api for delete (orderRouter)

### List users

- create user list page
- implement backend api
- fetch and display users

### Edit user

- create edit button
- create edit product ui
- display product info in the input boxes
- implement backend api
- handle edit click

### Delete user

- add delete button
- handle click action
- implement backend api for delete

### Publish on Heroku

1. create and config node project - npm init (root directory)
   add in package.json (root)
   "scripts": {
   "build": "cd backend && npm install && cd ../frontend && npm install && npm run build",
   "start": "node backend/server.js",
   }
2. serve build folder in frontend folder - npm run build(root)
3. create heroku account
4. connect it to github
5. create mongodb atlas database
6. set database connection in heroku env variables
7. copy .env in backend and paste in the root directory
8. npm start (root) - check if the app is running on the localhost
9. commit and push
