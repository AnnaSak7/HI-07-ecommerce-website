# HYPER ISLAND BRIEF 07

### MERN ECOMMERCE WEBSITE

##Brief : SHOPPING
The undisclosed brick and mortar store has decided it's time to go online! To be able to give all their customers the best experience, regardless if they're buying from their ph9one or their smart speaker they want an API to easily support and extend their offering.

REQUIREMENTS :

- There need to be at least one way for customers to interact with their new API
- Customers should be able to find available products
- Customers should be able to create a shopping cart
- Should be possible to create an order with a shopping cart or a single item
- Workers at the store should be able to mark orders as packed and shipped

### FetchProducts From Backend

1. set proxy in package.json (need to set the proxy in package.json to access to backend in the frontend)
2. npm install axios
3. use effect hook
4. use reducer hook

### Manage State By Reducer Hook

1. define reducer
2. update fetch data
3. get state from useReducer

### Bootstrap

- npm install react-bootstrap _bootstrap version_
- npm install react-router-bootstrap ...for _LinkContainer_

Don't forget to import Bootstrap in index.js _import 'bootstrap/dist/css/bootstrap.min.css_

### Create Product Details Page

1. fetch product from backend
2. create 3 columns for image, info, action

### Change names of headings

- npm install react-helmet-async
- _<HelmetProvider> <Helmet><title>some title</title</Helmet>_

### Loading and Message Component

1. create loading component
2. use spinner component
3. create message component
4. create utils.js to define getError function

### Connect to MongoDB Database

- npm install mongoose (MongoDB object modeling to connect with MongoDB)
- npm install dotenv (to load .env file in the node application)

### Seed data

1. create Product model
2. create User model
3. create seed route
4. use route in server.js
5. seed sample product

### Implement Add to Cart

1. create react context (to manage state globally)
2. define reducer
3. create store provider
4. implement add to cart button click handler

5. check exist item in the cart
6. check count in stock in backend

### Cart page

1. create 2 columns
2. display items list
3. create action column
4. click handler for inc/dec item
5. click handler for remove item
6. click handler for checkout

### sign in page

1. create sign in form
2. add email and password
3. add sign-in button

- npm i bcryptjs

### Sign in backend API

1. create signin api
2. npm install jsonwebtoken
3. define generateToken

- npm install express-async-handler
  (you can catch error in the async function inside this. If there is an error in this function, you can handle it in the server tactics)

- npm install jsonwebtoken
  (sending a token along with the object in res.send)

- add Advanced Rest Client in Chrome

### Complete sign in page with functionality

1. handle submit action
2. save token in store and local storage
3. show user name in header

- npm i react-toastify
  (adding nicer notifications)
  App.js : import 'react-toastify/dist/ReactToastify.css'
  <ToastContainer position="bottom-center" limit={1} />
  SigninPage.js : toast.error(getError(err));

### Shipping page

1. create form inputs
2. handle save shipping address
3. add checkout wizard bar

### Sign up page

1. create input forms
2. handle submit
3. create backend api

### Search box and search page

1. create search bar in the header.js
2. handle submit form
3. edit parse url to get query string
4. update product list api for search by name

### Add Advanced Search Filter

1. filter by category
2. filter by price range
3. filter by average rating
