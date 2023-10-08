import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CategoriesContainer from '../../components/CategoriesContainer';
import ProductsContainer from '../../components/ProductsContainer';
import s from './index.module.css';
import gnome from '../../Media/gnome.png';
import bush from '../../Media/bush.png';
import { useDispatch, useSelector } from 'react-redux';
import { addNewProductSale, getAllProducts } from '../../request/products_req';
import { useForm } from 'react-hook-form';

export default function MainPage() {
  // Инициализация react-hook-form
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onChange'
  });

  // Регистрация поля для ввода номера телефона с валидацией
  const phoneNumberRegister = register('phoneNumber', {
    required: "*This field is required",
    pattern: {
      value: /^(?:\+49|0)[1-9][0-9]*(?:[\s-]?\d+)*$/,
      message: '*Please, enter a valid phoneNumber'
    }
  });

  // Обработчик для отправки формы и добавления нового продукта на распродажу
  const submit = new_product_obj => {
    addNewProductSale(new_product_obj);
    reset();
  }

  // Получение dispatch из Redux
  const dispatch = useDispatch();

  // Загрузка всех продуктов с сервера при монтировании компонента
  useEffect(() => {
    dispatch(getAllProducts);
  }, [dispatch]);

  // Получение всех продуктов из Redux и фильтрация продуктов с скидкой
  const allProducts = useSelector(state => state.allProducts);
  const products = allProducts.filter(el => el.discont_price);

  // Получение случайных продуктов с скидкой
  const get_random_products = () => {
    const first_four_products = [...products].sort(() => Math.random() - 0.5);
    return first_four_products.slice(0, 4);
  } 
  const random_products = get_random_products();

  return (
    <div>
      {/* Секция с информацией о распродаже */}
      <div className={s.sale_container}>
        <div className={s.text}>
          <p>Sale</p>
          <p>New season</p>
          <Link to={'/sales'} className={s.sale_btn}>
            Sale
          </Link>
        </div>           
        <div className={s.bush}>
          <img src={bush} alt='Bush' />
        </div>       
      </div>

      {/* Секция с каталогом категорий */}
      <div className={s.catalog_container}>
        <div className={s.btn_container}>
          <h2>Catalog</h2>
          <Link to='/categories' >
            <div className={s.btn_cat}>All categories</div>
          </Link>
        </div>
        <CategoriesContainer limit={3} />
      </div>

      {/* Секция с информацией о скидке */}
      <div className={s.dwarf_wrapper}>
        <img src={gnome} alt="Gnome" />
        <div className={s.discount_descr}>
          <h1>5% off</h1>
          <h2>on the first order</h2>
          {/* Форма для получения скидки */}
          <form onSubmit={handleSubmit(submit)}>
            <input type="text" className={s.phone_num_inp} placeholder='+49' name='phoneNumber' {...phoneNumberRegister} />
            {/* Вывод ошибки валидации, если есть */}
            {errors.phoneNumber && <p className={s.error_msg}>{errors.phoneNumber?.message}</p>}
            <button className={s.discount_btn}>Get a discount</button>
          </form>
        </div>
      </div>

      {/* Секция с продуктами на распродаже */}
      <div className={s.gen_sale_container}>
        <h3>Sale</h3>
        <div>
          <ProductsContainer products={random_products} category_show={false} />     
        </div>
      </div>
    </div>
  );
}


