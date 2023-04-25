import { ADD_PRODUCTS_DATA, PLACE_ORDER, REMOVE_ORDER, EMPTY_ORDERS } from "./action";

const initialState = {
    productList: [],
    orders: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS_DATA:
            return { ...state, productList: action.payload }
        case PLACE_ORDER:
            return { ...state, orders: [...state.orders, action.payload] }
        case REMOVE_ORDER:
            return { ...state, orders: state.orders.filter(order => order.order_id !== action.payload) }
        case EMPTY_ORDERS:
            return { ...state, orders: [] }
        default:
            return state
    }
}

export default appReducer;