import React from 'react';
import { useSelector } from 'react-redux';
import ProductsContainer from '../../components/ProductsContainer'; 
import AllProductsSort from '../../components/FilterForms/AllProductsSort';

export default function AllProductsPage() {
  // Получение списка всех продуктов из хранилища Redux
  const all_products_state = useSelector(state => state.allProducts);

  // Компонент для отображения всех продуктов
  return (
    <div> 
      <h1>All Products</h1>
      <AllProductsSort /> {/* Компонент для сортировки продуктов */}
      <ProductsContainer products={all_products_state} /> {/* Компонент для отображения продуктов */}
    </div>
  );
}

