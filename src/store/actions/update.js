import { actionTypes } from './actionTypes'

export const updateProductInfo = data => {
  return { type: actionTypes.UPDATE_PRODUCT_INFO, data }
}
