import { actionTypes } from './actionTypes'

export const putCartItems = data => {
  return { type: actionTypes.PUT_CART_ITEMS, data }
}
