# HYPER ISLAND BRIEF 07

MERN ECOMMERCE WEBSITE

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

### Checkout page

1. create 2 columns
2. display items list
3. create action column
