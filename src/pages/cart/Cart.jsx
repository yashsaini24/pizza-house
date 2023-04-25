import React, { useEffect, useState } from 'react'
import './cart.css'
import Button from '../../components/button/Button'
import OrderCard from '../../components/ordercard/OrderCard'
import Empty_Cart_Icon from '../../assets/empty_cart_icon.svg'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { emptyOrders } from '../../redux/action'

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const orderList = useSelector(state => state.orders)

  const [billingAmount, setBillingAmount] = useState(0)

  const handleClick = () => {
    dispatch(emptyOrders())
    window.alert("Order Placed Successfully...")
  }

  useEffect(() => {
    const totalAmount = orderList.reduce((acc, order) => acc + order.price * order.quantity, 0);
    setBillingAmount(totalAmount);
  }, [orderList])
  
  return (
    <section className='cart-section'>
      <header className='cart-header'>
        <h2 className='cart-header-title'>Order Summary</h2>
      </header>
      {orderList.length ? <div className='cart-orders-container'>
        {orderList.map(order => <OrderCard {...order} key={order.order_id} />)}
        <div>Billing Amount: {billingAmount} &#8377;</div>
        <Button text='Place Order' trigger={handleClick} classname='order-btn' />
      </div> :
        <div className='cart-no-orders'>
          <img src={Empty_Cart_Icon} alt='empty cart icon' className='empty-cart-icon' />
          <div>Your Cart Is Empty!!<br />Proceed to <span onClick={() => navigate('/')} style={{ color: '#b75418', cursor: 'pointer' }}>Place Order</span></div>
        </div>}
    </section>
  )
}

export default Cart
