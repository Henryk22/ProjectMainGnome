const ADD_TO_CART = "ADD_TO_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";
const INCREMENT_COUNT = "INCREMENT_COUNT";
const DECREMENT_COUNT = "DECREMENT_COUNT";
const CLEAR_CART = "CLEAR_CART";

export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload });
export const deleteFromCartAction = (payload) => ({
  type: DELETE_FROM_CART,
  payload,
});
export const incrementCountAction = (payload) => ({
  type: INCREMENT_COUNT,
  payload,
});
export const decrementCountAction = (payload) => ({
  type: DECREMENT_COUNT,
  payload,
});
export const clearCartAction = () => ({ type: CLEAR_CART });

const checkProduct = (state, payload) => {
  const productInCart = state.find((el) => el.id === +payload.id);
  if (!productInCart) {
    return [...state, { ...payload, count: 1 }];
  } else {
    productInCart.count++;
    return [...state];
  }
};


const initialState = JSON.parse(localStorage.getItem('local_cart')) || [] 

export const cartReducer = (state = initialState, action) => {
  if (action.type === ADD_TO_CART) {
    return checkProduct(state, action.payload);
  } else if (action.type === DELETE_FROM_CART) {
    return state.filter((el) => el.id !== action.payload);
  } else if (action.type === INCREMENT_COUNT) {
    state.find((el) => el.id === action.payload).count++;
    return [...state];
  } else if (action.type === DECREMENT_COUNT) {
    const product = state.find((el) => el.id === action.payload);
    if (product.count === 1) {
      return state.filter((el) => el.id !== product.id);
    } else {
      product.count--;
      return [...state];
    }
  } else if (action.type === CLEAR_CART) {
    return [];
  } else {
    return state;
  }
};


// счетчик товаров//
export const selectCartItemCount = (state) => {
	return state.cart.reduce((acc, { count }) => {
	  return acc + count;
	}, 0);
  };

  