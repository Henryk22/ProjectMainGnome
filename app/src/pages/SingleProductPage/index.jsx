import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../request/products_req';
 import { Link, useParams,  } from 'react-router-dom';
import s from './index.module.css'
import { addToCartAction } from '../../store/reducer/cartReducer';




export default function SingleProductPage() {
	
  const { id } = useParams()

  const dispatch = useDispatch()

 useEffect(()=> dispatch(getSingleProduct(id)), [])

  const single_product_state = useSelector(state => state.singleProduct)

  
  const { title, price, discont_price, description, image } = single_product_state

  // console.log(single_product_state);

  return (
    <div className={s.product_item}>
       <img src={`http://localhost:3333${image}`} alt={title} />
		  <div>
			  
		  <p>{title}</p> 
		  <p>Price: {price}$</p>  
        <p>Discount: {discont_price}$</p>
        <p>Description: {description}</p>
			  <div className={s.add_btn}
				  
				  onClick={() => dispatch(addToCartAction({ id:+id, title,price, image, discont_price }))}
				  
			  >Add to 🛒</div>
      </div>
    </div>
  )
}