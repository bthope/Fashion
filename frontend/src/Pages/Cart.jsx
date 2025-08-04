import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

export const Cart = () => {
  const { 
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
    <div style={{ padding: '40px 20px', minHeight: '60vh' }}>
      <h1>Giỏ Hàng Của Bạn</h1>
      
      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <div style={{ fontSize: '64px', marginBottom: '20px' }}>🛒</div>
          <h2>Giỏ hàng của bạn đang trống</h2>
          <p>Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm!</p>
        </div>
      ) : (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {cartItems.map((item) => (
            <div key={item.id} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '20px 0', 
              borderBottom: '1px solid #eee' 
            }}>
              <img 
                src={item.image} 
                alt={item.name} 
                style={{ 
                  width: '100px', 
                  height: '120px', 
                  objectFit: 'cover', 
                  marginRight: '20px',
                  borderRadius: '8px'
                }} 
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>{item.name}</h3>
                <p style={{ 
                  fontWeight: 'bold', 
                  color: '#ff4141', 
                  fontSize: '20px',
                  margin: '0 0 15px 0'
                }}>
                  ${item.new_price}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button 
                      style={{
                        backgroundColor: '#f0f0f0',
                        border: 'none',
                        width: '35px',
                        height: '35px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        fontSize: '18px'
                      }}
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span style={{ 
                      fontWeight: 'bold', 
                      minWidth: '30px', 
                      textAlign: 'center',
                      fontSize: '18px'
                    }}>
                      {item.quantity}
                    </span>
                    <button 
                      style={{
                        backgroundColor: '#f0f0f0',
                        border: 'none',
                        width: '35px',
                        height: '35px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        fontSize: '18px'
                      }}
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#ff4141',
                      cursor: 'pointer',
                      fontSize: '20px',
                      padding: '5px'
                    }}
                    onClick={() => handleRemoveItem(item.id)}
                    title="Xóa sản phẩm"
                  >
                    🗑️
                  </button>
                </div>
              </div>
              <div style={{ 
                fontWeight: 'bold', 
                fontSize: '20px',
                color: '#333',
                minWidth: '100px',
                textAlign: 'right'
              }}>
                ${(item.new_price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
          
          <div style={{ 
            marginTop: '30px', 
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              <span>Tổng cộng:</span>
              <span style={{ color: '#ff4141' }}>${totalAmount.toFixed(2)}</span>
            </div>
            <button style={{
              width: '100%',
              padding: '15px',
              backgroundColor: '#ff4141',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Tiến Hành Thanh Toán
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
