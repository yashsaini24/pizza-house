export const ADD_PRODUCTS_DATA = 'ADD_PRODUCTS_DATA'
export const PLACE_ORDER = 'PLACE_ORDER'
export const REMOVE_ORDER = 'REMOVE_ORDER'
export const EMPTY_ORDERS = 'EMPTY_ORDERS'

export const addProducts = (data) => ({ type: ADD_PRODUCTS_DATA, payload: data})

export const placeOrder = (data) => ({type: PLACE_ORDER, payload: data})

export const removeOrder = (data) => ({type: REMOVE_ORDER, payload: data})

export const emptyOrders = () => ({type: EMPTY_ORDERS})