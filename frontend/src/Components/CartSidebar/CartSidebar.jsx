import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './CartSidebar.css';

export const CartSidebar = () => {
  const { 
    isCartOpen, 
    closeCart, 
    getCartItems, 
    getTotalCartAmount, 
    updateCartItemQuantity, 
    removeItemFromCart 
  } = useContext(ShopContext);

  const cartItems = getCartItems();
  const totalAmount = getTotalCartAmount();

  const handleQuantityChange = (itemId, newQuantity) => {
    updateCartItemQuantity(itemId, newQuantity);
  };

  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
  };

  return (
    <>
      <div className={`cart-sidebar-overlay ${isCartOpen ? 'open' : ''}`} onClick={closeCart}></div>
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Giỏ Hàng</h2>
          <button className="close-btn" onClick={closeCart}>×</button>
        </div>
        
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <p>Giỏ hàng của bạn đang trống</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">${item.new_price}</div>
                  <div className="cart-item-controls">
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn" 
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button 
                        className="quantity-btn" 
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      className="remove-btn" 
                      onClick={() => handleRemoveItem(item.id)}
                      title="Xóa sản phẩm"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Tổng cộng:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">
              Thanh Toán
            </button>
          </div>
        )}
      </div>
    </>
  );
};