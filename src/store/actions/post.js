import { actionTypes } from './actionTypes'

export const postCartItems = data => {
  return { type: actionTypes.POST_CART_ITEMS, data }
}

export const postOrders = (data, language) => {
  return { type: actionTypes.POST_ORDERS, data, language }
}

export const postDeliveries = data => {
  return { type: actionTypes.POST_DELIVERIES, data }
}
