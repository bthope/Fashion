import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import pintester from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
       <div className='footer-logo'>
          <img src={footer_logo} alt="" />
          <p>BTHope</p>
       </div>
       <ul className='footer-links'>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
       </ul>
       <div className='footer-social-icon'>
          <div className='footer-icon-container'>
            <img src={instagram} alt="Instagram" />
          </div>
          <div className='footer-icon-container'>
            <img src={pintester} alt="Pinterest" />
          </div>
          <div className='footer-icon-container'>
            <img src={whatsapp} alt="WhatsApp" />
          </div>
       </div>
       <div className='footer-copyright'>
            <hr />
          <p>© 2023 BTHope. All rights reserved.</p>
       </div>
    </div>
  )
}
