// Тип действия (Action Type) для добавления продукта в корзину
const ADD_PRODUCT = "ADD_PRODUCT";

// Создаем action creator для добавления продукта в корзину
export const addProductAction = (payload) => ({ type: ADD_PRODUCT, payload });

// Редюсер (Reducer) для обработки добавления продукта в корзину
export const productsReducer = (state = [], action) => {
  if (action.type === ADD_PRODUCT) {
    // Если тип действия совпадает с ADD_PRODUCT, добавляем новый продукт в массив состояния
    return [...state, action.payload];
  } else {
    // Если тип действия не совпадает, возвращаем текущее состояние
    return state;
  }
};

// const ADD_PRODUCT = "ADD_PRODUCT";

// export const addProductAction = (payload) => ({ type: ADD_PRODUCT, payload });

// export const productsReducer = (state = [], action) => {
//   if (action.type === ADD_PRODUCT) {
//     return [...state, action.payload];
//   } else {
//     return state;
//   }
// };
