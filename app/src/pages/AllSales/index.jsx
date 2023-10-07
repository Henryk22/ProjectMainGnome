import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../request/products_req'
import ProductsContainer from '../../components/ProductsContainer'
import SortSales from '../../components/FilterForms/SortSales'


export default function AllSales() {

  const allProducts = useSelector(state => state.allProducts)
  const dispatch = useDispatch()

  useEffect(() => dispatch(getAllProducts),[dispatch])

  const allSalesProducts = allProducts.filter(el => el.discont_price)

  console.log(allSalesProducts);

  return (
    <div>
		<h1>All Sales</h1>
		<SortSales/>
         <ProductsContainer products={allSalesProducts} productsStyle={true}/>
    </div>
  )
}