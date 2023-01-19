import { actionTypes } from './actionTypes'

export const getStores = () => {
  return { type: actionTypes.GET_STORES }
}

export const getMyBags = () => {
  return { type: actionTypes.GET_MY_BAGS }
}

export const getMiniCart = () => {
  return { type: actionTypes.GET_MINI_CART }
}

export const getProductInfo = language => {
  return { type: actionTypes.GET_PRODUCT_INFO, language }
}

export const getPaymentMethods = () => {
  return { type: actionTypes.GET_PAYMENT_METHOODS }
}

export const getCustomersInfo = (bool = false) => {
  return { type: actionTypes.GET_CUSTOMERS_INFO, bool }
}

export const getOrderData = (ctId, paymentMethodCode, language) => {
  return { type: actionTypes.GET_ORDER_DATA, ctId, paymentMethodCode, language }
}

export const getCampaignInfo = () => {
  return { type: actionTypes.GET_CAMPAIGN_INFO }
}
