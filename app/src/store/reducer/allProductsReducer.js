// Типы действий (Action Types) для управления продуктами
const LOAD_ALL_PRODUCTS = "LOAD_ALL_PRODUCTS";
const SORT_PRODUCTS = "SORT_PRODUCTS";
const FILTER_PRODUCTS = "FILTER_PRODUCTS";
const DISCOUNT_PRODUCTS = "DISCOUNT_PRODUCTS";

// Action creators для загрузки всех продуктов, сортировки, фильтрации и отображения скидочных продуктов
export const loadAllProductsAction = (payload) => ({
  type: LOAD_ALL_PRODUCTS,
  payload,
});
export const sortProductsAction = (payload) => ({
  type: SORT_PRODUCTS,
  payload,
});
export const filterProductsAction = (payload) => ({
  type: FILTER_PRODUCTS,
  payload,
});
export const getDiscountProductsAction = (payload) => ({
  type: DISCOUNT_PRODUCTS,
  payload,
});

// Редюсер (Reducer) для управления данными о продуктах
export const allProductsReducer = (state = [], action) => {
  if (action.type === LOAD_ALL_PRODUCTS) {
    // Если тип действия совпадает с LOAD_ALL_PRODUCTS, обновляем состояние данными о продуктах и устанавливаем флаг `show_product` для отображения
    return action.payload.map((el) => ({ ...el, show_product: true }));
  } else if (action.type === SORT_PRODUCTS) {
    // Если тип действия совпадает с SORT_PRODUCTS, сортируем продукты в соответствии с переданным параметром
    if (action.payload === "title") {
      return [...state].sort((a, b) => a.title.localeCompare(b.title));
    } else if (action.payload === "price_asc") {
      return [...state].sort((a, b) => a.price - b.price);
    } else if (action.payload === "price_desc") {
      return [...state].sort((a, b) => b.price - a.price);
    } else if (action.payload === "default") {
      return [...state].sort((a, b) => a.id - b.id);
    }
    return [...state];
  } else if (action.type === FILTER_PRODUCTS) {
    // Если тип действия совпадает с FILTER_PRODUCTS, фильтруем продукты в зависимости от переданных параметров `min_value` и `max_value`
    const { min_value, max_value } = action.payload;
    return state.map((el) => {
      if (el.price >= min_value && el.price <= max_value) {
        el.show_product = true;
      } else {
        el.show_product = false;
      }
      return el;
    });
  } else if (action.type === DISCOUNT_PRODUCTS) {
    // Если тип действия совпадает с DISCOUNT_PRODUCTS, фильтруем продукты на основе наличия скидки
    if (action.payload) {
      return state.map((el) => {
        if (el.discont_price === null) {
          el.show_product = false;
        }
        return el;
      });
    } else {
      // Если параметр `payload` равен `false`, отображаем все продукты
      return state.map((el) => {
        el.show_product = true;
        return el;
      });
    }
  } else {
    // Если тип действия не совпадает ни с одним из вышеперечисленных, возвращаем текущее состояние
    return state;
  }
};

