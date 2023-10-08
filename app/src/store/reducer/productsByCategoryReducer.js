// Тип действия (Action Type) для загрузки продуктов по категории
const LOAD_PRODUCTS_BY_CATEGORY = "LOAD_PRODUCTS_BY_CATEGORY";

// Создаем action creator для загрузки продуктов по категории
export const loadProductsByCategoryAction = (payload) => ({
  type: LOAD_PRODUCTS_BY_CATEGORY,
  payload,
});

// Редюсер (Reducer) для обработки данных о продуктах по категории
export const productsByCategoryReducer = (state = [], action) => {
  if (action.type === LOAD_PRODUCTS_BY_CATEGORY) {
    // Если тип действия совпадает с LOAD_PRODUCTS_BY_CATEGORY, обновляем состояние
    // добавляя флаг `show_product: true` к каждому продукту из payload
    return action.payload.map((el) => ({ ...el, show_product: true }));
  } else {
    // Если тип действия не совпадает, возвращаем текущее состояние
    return state;
  }
};


