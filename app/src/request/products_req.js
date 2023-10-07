import { loadAllProductsAction } from "../store/reducer/allProductsReducer";
import { loadProductsByCategoryAction } from "../store/reducer/productsByCategoryReducer";
import { loadSingleProductAction } from "../store/reducer/singleProductReducer";

// Действие для получения продуктов по категории с сервера и их загрузки в Redux
export const getProductsByCategory = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3333/categories/${id}`)
      .then((res) => res.json())
      .then((json) => dispatch(loadProductsByCategoryAction(json.data)));
  };
};

// Действие для получения всех продуктов с сервера и их загрузки в Redux
export const getAllProducts = (dispatch) => {
  fetch("http://localhost:3333/products/all")
    .then((res) => res.json())
    .then((json) => dispatch(loadAllProductsAction(json)));
};

// Действие для получения информации о конкретном продукте с сервера и его загрузки в Redux
export const getSingleProduct = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3333/products/${id}`)
      .then((res) => res.json())
      .then((json) => dispatch(loadSingleProductAction(json[0])));
  };
};

// Функция для отправки заказа на сервер
export const sendOrder = (new_product) => {
  fetch("http://localhost:3333/order/send", {
    method: "POST",
    body: JSON.stringify({ new_product }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json, "new order added"));
};

// Функция для добавления нового продукта на распродажу на сервер
export const addNewProductSale = (new_product) => {
  fetch("http://localhost:3333/sale/send", {
    method: "POST",
    body: JSON.stringify({ new_product }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json, "new product added"));
};

// import { loadAllProductsAction } from "../store/reducer/allProductsReducer"
// import { loadProductsByCategoryAction } from "../store/reducer/productsByCategoryReducer";
// import { loadSingleProductAction } from "../store/reducer/singleProductReducer";

// export const getProductsByCategory = (id) => {
//   return dispatch => {
//   fetch(`http://localhost:3333/categories/${id}`)
//     .then(res => res.json())
//     .then(json => dispatch(loadProductsByCategoryAction(json.data)))
// }
// }

// export const getAllProducts = dispatch => {
//   fetch('http://localhost:3333/products/all')
//       .then(res => res.json())
//       .then(json => dispatch(loadAllProductsAction(json)))
// }

// export const getSingleProduct = (id) => {
//   return dispatch => {
//   fetch(`http://localhost:3333/products/${id}`)
//     .then(res => res.json())
//     .then(json => dispatch(loadSingleProductAction(json[0])))
// }
// }

// export const sendOrder = new_product => {
// 	fetch('http://localhost:3333/order/send', {
// 	  method: 'POST',
// 	  body: JSON.stringify({new_product})
// 	})
// 	  .then(res => res.json())
// 	  .then(json => console.log(json, 'new order added'))
//   }

//   export const addNewProductSale = new_product => {
// 	fetch('http://localhost:3333/sale/send', {
// 	  method: 'POST',
// 	  body: JSON.stringify({new_product})
// 	})
// 	  .then(res => res.json())
// 	  .then(json => console.log(json, 'new product added'))
//   }
