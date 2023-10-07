import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducer/cartReducer";
import { singleProductReducer } from "./reducer/singleProductReducer";
import { allProductsReducer } from "./reducer/allProductsReducer";
import { productsByCategoryReducer } from "./reducer/productsByCategoryReducer";
import { categoriesReducer } from "./reducer/categoriesReducer";


const rootReducer = combineReducers({
  categories: categoriesReducer,
  productsByCategory: productsByCategoryReducer,
  allProducts: allProductsReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,

});

export const store = createStore(rootReducer, applyMiddleware(thunk));
