import { loadAllCategoriesAction } from "../store/reducer/categoriesReducer";

// Действие для получения всех категорий с сервера и их загрузки в Redux
export const getAllCategories = (dispatch) => {
  fetch("http://localhost:3333/categories/all")
    .then((res) => res.json())
    .then((json) => dispatch(loadAllCategoriesAction(json)));
};

// import { loadAllCategoriesAction } from "../store/reducer/categoriesReducer"

// export const getAllCategories = (dispatch) => {
//   fetch('http://localhost:3333/categories/all')
//     .then(res => res.json())
//     .then(json => dispatch(loadAllCategoriesAction(json)))
// }
