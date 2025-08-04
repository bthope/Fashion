// Navbar.jsx
import React, { useState, useContext } from 'react';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


export const Navbar = () => {
  const [menu,setMenu] = useState("shop");
  const { getTotalCartItems, toggleCart } = useContext(ShopContext);
  
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => {setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to="/">Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("men")}}><Link style={{ textDecoration: 'none'}} to="/mens">Men</Link> {menu==="men"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("women")}}><Link style={{ textDecoration: 'none'}} to="/womens">Women</Link> {menu==="women"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("kids")}}><Link style={{ textDecoration: 'none'}} to="/kids">Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to="/login"><button className='nav-login'>Login</button></Link>
        <div onClick={toggleCart} style={{ cursor: 'pointer' }}>
          <img src={cart_icon} alt="Cart Icon" />
        </div>
        <div className='nav-cart-count'><p>{getTotalCartItems()}</p> </div>
      </div>
    </div>
  )
}
