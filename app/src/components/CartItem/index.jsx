import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { decrementCountAction, deleteFromCartAction, incrementCountAction } from '../../store/reducer/cartReducer';


export default function CartItem({ id, title, price, count, image, discont_price  }) {
	const dispatch = useDispatch();
  
	const price_disc = (discont_price ? ((discont_price * count).toFixed(2)) : price.toFixed(2))

	const price_cart =  (discont_price  ? ((price * count).toFixed(2)) : '')
   
  
	return (      
	  <div className={s.card}>
		<div>
			 <img src={`http://localhost:3333${image}`} alt={title} />
		</div>
  
		<div className={s.discr_cont}>
		  <p>{ title }</p> 
			<div className={s.inc_dic}>
			  <button className={s.decr_btn} onClick={() => dispatch
			  (decrementCountAction(id))}>-</button>
			  <p>{ count }</p>
			  <button className={s.incr_btn}onClick={() => dispatch
			  (incrementCountAction(id))}>+</button>
			</div>
		</div>
			<div className={s.price_dis}>
			  <p>{ price_disc }$</p>    
			  <p>{ price_cart }</p>        
			</div>
		<span className={s.kreuz} onClick = {() => dispatch(deleteFromCartAction(id))}>
		  X
		</span>
	  </div>
   
	)
  }