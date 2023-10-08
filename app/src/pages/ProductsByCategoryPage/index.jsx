import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from '../../request/products_req';
import ProductsContainer from '../../components/ProductsContainer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function ProductsByCategoryPage() {
  // Получение параметра `id` из URL с использованием `useParams` из react-router-dom
  const { id } = useParams();

  const dispatch = useDispatch();

  // Загрузка продуктов по категории с сервера при монтировании компонента
  useEffect(() => {
    dispatch(getProductsByCategory(id));
  }, [dispatch, id]);

  // Получение данных о продуктах по категории из Redux
  const products_by_category_state = useSelector(state => state.productsByCategory);

  return (
    <div>
      {/* Отображение списка продуктов по категории с использованием ProductsContainer */}
      <ProductsContainer products={products_by_category_state}/>        
    </div>
  );
}




  // import { useDispatch, useSelector } from 'react-redux'
  // import { getProductsByCategory } from '../../request/products_req';
  // import ProductsContainer from '../../components/ProductsContainer';
  // import { useParams } from 'react-router-dom';
  // import { useEffect } from 'react';


  // export default function ProductsByCategoryPage() {

    
  //   const { id } = useParams()

  //   const dispatch = useDispatch();

  //   useEffect(() => dispatch(getProductsByCategory(id)), []);

  //   const products_by_category_state = useSelector(state => state.productsByCategory)

  //   return (
  //     <div>
  //       <ProductsContainer products={products_by_category_state}/>        
        
  //     </div>
  //   )
  // }


