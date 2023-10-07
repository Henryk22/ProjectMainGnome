import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import MainPage from './pages/MainPage';
import AllCategoriesPage from './pages/AllCategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';
import SingleProductPage from './pages/SingleProductPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import { getAllCategories } from './request/categories_req';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getAllProducts } from './request/products_req';
import AllSales from './pages/AllSales';

 

function App() {

  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories) 
    dispatch(getAllProducts)
  }, [])

  
  return (
    <div className="app_container">
      <NavMenu />
      <Routes>
        {/* ДОМАШНЯЯ СТРАНИЦА */}
        <Route path="/" element={<MainPage />} />

        <Route path="/categories" element={<AllCategoriesPage />} />
        <Route path="/categories/:id" element={<ProductsByCategoryPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
		<Route path='/sales' element={<AllSales />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
