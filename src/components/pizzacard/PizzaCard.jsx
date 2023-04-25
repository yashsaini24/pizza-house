import React, { useState } from 'react'
import './pizzacard.css'
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr'
import { AiFillStar } from 'react-icons/ai'
import Button from '../button/Button'
import { useDispatch } from 'react-redux'
import { placeOrder } from '../../redux/action'

const PizzaCard = (props) => {
    const dispatch = useDispatch()
    const [order, setOrder] = useState({
        img_url: props.img_url,
        name: props.name,
        isVeg: props.isVeg,
        price: props.price,
        size: '',
        toppings: [],
        quantity: 0,
        order_id: Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000
    })

    function handleCheckboxChange(event) {
        const checkboxValue = event.target.value;
        const isChecked = event.target.checked;
        if (isChecked) {
            setOrder(prev => ({ ...prev, toppings: [...prev.toppings, checkboxValue] }));
        } else {
            setOrder(prev => ({ ...prev, toppings: prev.toppings.filter(t => t !== checkboxValue) }));
        }
    }

    function handleSizeChange(event) {
        setOrder((prev) => ({ ...prev, size: event.target.value }));
    }

    const handleOrder = () => {
        if (order.quantity <= 0 || order.size === '') {
            if (order.size === '')
                window.alert('Please mention size')
            else
                window.alert('Please mention quantity')
        } else {
            dispatch(placeOrder(order))
            window.alert("Order Added To Cart")
        }
    }

    return (
        <div className='pizza-card-container'>
            <div className='pizza-card-image-conatiner'>
                <img className='pizza-card-image' src={props.img_url} />
            </div>
            <div className='pizza-name'>{props.name}</div>
            <p className='pizza-description'>{props.description}</p>
            <div className={`pizza-type ${props.isVeg ? 'veg' : 'nonveg'}`}>{props.isVeg ? 'Veg' : 'Non Veg'}</div>
            <div className='pizza-details-container'>
                <div className='pizza-price'>{props.price} &#8377;</div>
                <div className='pizza-rating-container'>
                    <AiFillStar className='star-icon' />
                    <div className='pizza-rating'>{props.rating}</div>
                </div>
            </div>
            <div className='pizza-size-container'>
                <div className='pizza-size-title'>{props.size[0].title}</div>
                <select className='pizza-size-filter' onChange={handleSizeChange}>
                    <option value=''>Select Size</option>
                    {props.size[0].items.map((item, index) => <option key={index} value={item.size}>{item.size}</option>)}
                </select>
            </div>
            <div className='pizza-topping-container'>
                <div className='pizza-topping-title'>{props.toppings[0].title}</div>
                <div className='pizza-toppings'>
                    {props.toppings[0].items.map((item, index) => <label><input type='checkbox' value={item.name} key={index} onChange={handleCheckboxChange} />{item.name}</label>)}
                </div>
            </div>
            <div className='pizza-quantity-container'>
                <div className='pizza-quantity-title'>Quantity</div>
                <div className='pizza-quantity'>
                    <GrFormSubtract className='pizza-quantity-action' onClick={() => setOrder(prev => ({ ...prev, quantity: prev.quantity - 1 < 0 ? 0 : prev.quantity - 1 }))} />
                    <div className='pizza-quantity-number'>{order.quantity}</div>
                    <GrFormAdd className='pizza-quantity-action' onClick={() => setOrder(prev => ({ ...prev, quantity: prev.quantity + 1 }))} />
                </div>
            </div>
            <Button text="Add" trigger={handleOrder} classname={`pizza-card-btn ${order.quantity ? '' : 'pizza-card-btn-disabled'}`} disabled={!order.quantity}/>
        </div>
    )
}

export default PizzaCard
