import React, { useContext } from 'react'
import './Item.css'
import { ShopContext } from '../../Context/ShopContext'

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(props.id);
  };

  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className='item-price'>
            <div className='item-price-new'>
                ${props.new_price}
            </div>
            <div className='item-price-old'>
                ${props.old_price}
            </div>
        </div>
        <button className='add-to-cart-btn' onClick={handleAddToCart}>
            Thêm vào giỏ
        </button>
    </div>
  )
}
export default Item