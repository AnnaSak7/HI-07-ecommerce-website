import { createContext, useReducer } from 'react';

export const Store = createContext();

//デフォルト型　(reducer)
const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  cart: {
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod: localStorage.getItem('paymentMethod')
      ? localStorage.getItem('paymentMethod')
      : '',
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
};

export const ACTIONS = {
  CART_ADD_ITEM: 'CART_ADD_ITEM',
  CART_REMOVE_ITEM: 'CART_REMOVE_ITEM',
  CART_CLEAR: 'CART_CLEAR',
  USER_SIGNIN: 'USER_SIGNIN',
  USER_SIGNOUT: 'USER_SIGNOUT',
  SAVE_SHIPPING_ADDRESS: 'SAVE_SHIPPING_ADDRESS',
  SAVE_PAYMENT_METHOD: 'SAVE_PAYMENT_METHOD',
};

//デフォルト型　(reducer)
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CART_ADD_ITEM:
      // add to card
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };

    case ACTIONS.CART_REMOVE_ITEM: {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case ACTIONS.CART_CLEAR:
      return { ...state, cart: { ...state.cart, cartItems: [] } };
    case ACTIONS.USER_SIGNIN:
      return { ...state, userInfo: action.payload };

    case ACTIONS.USER_SIGNOUT:
      return {
        ...state,
        userInfo: null,
        // removing cart items and shipping address when signing out
        cart: { cartItems: [], shippingAddress: {}, paymentMethod: '' },
      };

    case ACTIONS.SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: action.payload,
        },
      };

    case ACTIONS.SAVE_PAYMENT_METHOD:
      return {
        ...state,
        cart: {
          ...state,
          paymentMethod: action.payload,
        },
      };

    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState); //デフォルト型 (reducer)
  const value = { state, dispatch }; // dispatch is a function to update the state
  return <Store.Provider value={value}>{props.children}</Store.Provider>; // Context Provider
};

//useReducer
// dispatch(action)で実行
// actionは何をするのかを示すオブジェクト
// {type: increment, payload: 0}のように、typeプロパティ（actionの識別子）と値のプロパティで構成されている。
