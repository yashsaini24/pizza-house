import React from 'react'
import './button.css'
const Button = ({text = 'Button', classname = '', icon = '', trigger = () => {}, disabled = false}) => {
  return (
    <button onClick={trigger} className={classname} disabled={disabled}>
      <img src={icon} /><span>{text}</span>
    </button>
  )
}

export default Button
