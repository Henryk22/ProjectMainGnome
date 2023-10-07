
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategory } from '../../request/products_req';
import ProductsContainer from '../../components/ProductsContainer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


export default function ProductsByCategoryPage() {

  
  const { id } = useParams()

  const dispatch = useDispatch();

  useEffect(() => dispatch(getProductsByCategory(id)), []);

  const products_by_category_state = useSelector(state => state.productsByCategory)

  return (
    <div>
      <ProductsContainer products={products_by_category_state}/>        
      
    </div>
  )
}


