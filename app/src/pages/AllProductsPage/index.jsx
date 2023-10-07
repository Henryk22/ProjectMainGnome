import React from 'react'
import { useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer'
import AllProductsSort from '../../components/FilterForms/AllProductsSort'


export default function AllProductsPage() {

  const all_products_state = useSelector(state => state.allProducts)

  // console.log(all_products_state);

  return (
	  <div> 
		 <h1>All Products</h1>
		  {/* <FilterForm />
		  <br />
		  <AllProductsSort />
		   <br />
      <SortForm />
      <br /> */}
		<AllProductsSort/>

      <ProductsContainer products={all_products_state} />
    </div>
  )
}
