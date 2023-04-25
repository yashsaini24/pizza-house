import React from 'react'
import './navbar.css'
import OrgLogo from '../../assets/pizza_house_logo.svg'
import { CiShoppingBasket } from 'react-icons/ci'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const totalOrders = useSelector(state => state.orders)
  const navigate = useNavigate()

  return (
    <nav className='navbar'>
      <img src={OrgLogo} alt='org logo' onClick={() => navigate('')} className='navbar-logo'/>
      <div className='cart-logo-container'>
        <CiShoppingBasket className='cart-logo' onClick={() => navigate('/cart')} />
        {totalOrders.length > 0 && <div className='orders-notification'>{totalOrders.length}</div>}
      </div>
    </nav>
  )
}

export default Navbar
