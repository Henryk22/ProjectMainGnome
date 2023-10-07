// Действие (Action) для загрузки данных о конкретном продукте
const LOAD_SINGLE_PRODUCT = "LOAD_SINGLE_PRODUCT";

// Создаем action creator для загрузки данных о конкретном продукте
export const loadSingleProductAction = (payload) => ({
  type: LOAD_SINGLE_PRODUCT,
  payload,
});

// Редюсер (Reducer) для обработки данных о конкретном продукте
export const singleProductReducer = (state = [], action) => {
  if (action.type === LOAD_SINGLE_PRODUCT) {
    // Если тип действия совпадает с LOAD_SINGLE_PRODUCT, 
    //обновляем состояние данными о продукте из payload
    return action.payload;
  } else {
    // Если тип действия не совпадает, возвращаем текущее состояние
    return state;
  }
};

// const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT';

// export const loadSingleProductAction = payload => ({ type: LOAD_SINGLE_PRODUCT, payload });

// export const singleProductReducer = (state=[], action) => {
//   if(action.type === LOAD_SINGLE_PRODUCT){
//     return action.payload
//   } else {
//     return state
//   }
// }
