// Тип действия (Action Type) для загрузки всех категорий
const LOAD_ALL_CATEGORIES = "LOAD_ALL_CATEGORIES";

// Создаем action creator для загрузки всех категорий
export const loadAllCategoriesAction = (payload) => ({
  type: LOAD_ALL_CATEGORIES,
  payload,
});

// Редюсер (Reducer) для обработки данных о всех категориях
export const categoriesReducer = (state = [], action) => {
  if (action.type === LOAD_ALL_CATEGORIES) {
    // Если тип действия совпадает с LOAD_ALL_CATEGORIES, обновляем состояние данными о категориях из payload
    return action.payload;
  } else {
    // Если тип действия не совпадает, возвращаем текущее состояние
    return state;
  }
};

