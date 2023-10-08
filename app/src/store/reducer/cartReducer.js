// Типы действий (Action Types) для корзины
const ADD_TO_CART = "ADD_TO_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";
const INCREMENT_COUNT = "INCREMENT_COUNT";
const DECREMENT_COUNT = "DECREMENT_COUNT";
const CLEAR_CART = "CLEAR_CART";

// Action creators для добавления, удаления, инкремента, декремента и очистки корзины
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

// Функция для проверки наличия товара в корзине и обновления состояния
const checkProduct = (state, payload) => {
  const productInCart = state.find((el) => el.id === +payload.id);
  if (!productInCart) {
    // Если товара нет в корзине, добавляем его с начальным количеством 1
    return [...state, { ...payload, count: 1 }];
  } else {
    // Если товар уже есть в корзине, увеличиваем количество на 1
    productInCart.count++;
    return [...state];
  }
};

// Инициализируем начальное состояние корзины из localStorage, если оно там есть, иначе начальное состояние - пустой массив
const initialState = JSON.parse(localStorage.getItem('local_cart')) || [];

// Редюсер (Reducer) для управления состоянием корзины
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

// Селектор (Selector) для получения общего количества товаров в корзине
export const selectCartItemCount = (state) => {
  return state.cart.reduce((acc, { count }) => {
    return acc + count;
  }, 0);
};


