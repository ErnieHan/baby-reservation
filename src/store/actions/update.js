import { actionTypes } from './actionTypes'

export const updateStores = data => {
  return { type: actionTypes.UPDATE_STORES, data }
}

export const updateMyBags = data => {
  return { type: actionTypes.UPDATE_MY_BAGS, data }
}

export const updateMiniCart = data => {
  return { type: actionTypes.UPDATE_MINI_CART, data }
}

export const updateProductInfo = data => {
  return { type: actionTypes.UPDATE_PRODUCT_INFO, data }
}

export const updateBankAccounts = data => {
  return { type: actionTypes.UPDATE_BANK_ACCOUNTS, data }
}

export const updatePaymentMethods = data => {
  return { type: actionTypes.UPDATE_PAYMENT_METHOODS, data }
}

export const updateCustomersInfo = (isLogin, data) => {
  return { type: actionTypes.UPDATE_CUSTOMERS_INFO, isLogin, data }
}

export const updateOrderData = data => {
  return { type: actionTypes.UPDATE_ORDER_DATA, data }
}

export const updateLoginComplete = bool => {
  return { type: actionTypes.UPDATE_LOGIN_COMPLETE, bool }
}

export const updatePostOrderError = data => {
  return { type: actionTypes.UPDATE_POST_ORDER_ERROR, data }
}

export const updateErrorCodes = (key, value) => {
  return { type: actionTypes.UPDATE_ERROR_CODES, key, value }
}

export const updateCampaignInfo = data => {
  return { type: actionTypes.UPDATE_CAMPAIGN_INFO, data }
}
