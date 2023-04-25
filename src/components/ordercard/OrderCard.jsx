import React from 'react'
import './ordercard.css'
import Button from '../button/Button'
import { useDispatch } from 'react-redux'
import { removeOrder } from '../../redux/action'

const OrderCard = (props) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(removeOrder(props.order_id))
  }

  return (
    <div className='order-item'>
      <div className='order-item-description'>
        <img className='order-item-img' src={props.img_url} />
        <div className='order-item-details'>
          <div className='order-item-name'>{props.name}</div>
          <div className='order-item-size'>{props.size}</div>
          <div className='order-item-toppings'>{props.toppings.map(topping => <span>{topping}, </span>)}</div>
        </div>
      </div>
      <div className='order-item-expense'>
        <div className='order-item-quantity'>{`${props.price}`} &#8377; x {`${props.quantity}`}</div>
        <div className='order-item-cost'>{props.price * props.quantity} &#8377;</div>
        <Button text="Remove Item" trigger={handleClick} classname='remove-btn' />
      </div>
    </div>
  )
}

export default OrderCard
