import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './index.module.css'
import {filterProductsAction,getDiscountProductsAction,sortProductsAction} from '../../../store/reducer/allProductsReducer'; // 

export default function AllProductsSort() {
  const dispatch = useDispatch(); 

  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleChange = () => {
    setCheckboxChecked(!checkboxChecked);
    // Вызывайте get_discount_products при изменении состояния флажка
    dispatch(getDiscountProductsAction(!checkboxChecked));
  };

  const order = (e) => {
    dispatch(sortProductsAction(e.target.value));
  };

  const submit = (e) => {
    e.preventDefault();
    const { min, max } = e.target;
    const min_value = min.value || 0;
    const max_value = max.value || Infinity;
    dispatch(filterProductsAction({ min_value, max_value }));
  };

  return (

	<div className={s.container}>		   
	      <form className={s.price} onSubmit={submit}>
            <p className={s.title}>Price</p>
            <input type='number' placeholder='min' name='min' />
            <input type='number' placeholder='max' name='max' />
            <button type='submit'>Filter</button>
          </form>
	    

	    <div className={s.discount}>
          <p className={s.title}>Discounted items</p>
          <input 
          type='checkbox'
          checked={checkboxChecked}
          onChange={handleChange}
          />
	    </div>

      

	    <div className={s.sorted}> 
	      <p className={s.title}>Sorted</p>
          <select onChange={order}>
		    <option value='default'>By default</option>
		    <option value='title'>By alphabet A-Z</option>
		    <option value='price_asc'>By price ASC</option> 
            <option value='price_desc'>By price DESC</option>
          </select>    
        </div>     
	</div>
  );
}
