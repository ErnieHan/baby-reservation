import { HYDRATE } from 'next-redux-wrapper'
import { actionTypes } from '../actions/actionTypes'

const initState = {
  stores: null,
  myBags: null,
  miniCart: null,
  productInfo: null,
  customersInfo: null,
  isLogin: false,
  isLoginComplete: false,
  orderData: null,
  postOrderError: null,
  errorCodes: {
    productInfoErrorCode: null,
    myBagErrorCode: null,
    postOrderErrorCode: null
  },
  paymentMethods: null,
  bankAccounts: null,
  campaignInfo: null
}

const update = (state = initState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.update }
    }

    case actionTypes.UPDATE_STORES:
      return {
        ...state,
        stores: action.data
      }

    case actionTypes.UPDATE_MY_BAGS:
      return {
        ...state,
        myBags: action.data
      }

    case actionTypes.UPDATE_MINI_CART:
      return {
        ...state,
        miniCart: action.data
      }

    case actionTypes.UPDATE_PRODUCT_INFO:
      return {
        ...state,
        productInfo: action.data
      }

    case actionTypes.UPDATE_PAYMENT_METHOODS:
      return {
        ...state,
        paymentMethods: action.data
      }

    case actionTypes.UPDATE_BANK_ACCOUNTS:
      return {
        ...state,
        bankAccounts: action.data
      }

    case actionTypes.UPDATE_CUSTOMERS_INFO:
      return {
        ...state,
        isLogin: action.isLogin,
        customersInfo: action.data
      }

    case actionTypes.UPDATE_LOGIN_COMPLETE:
      return {
        ...state,
        isLoginComplete: action.bool
      }

    case actionTypes.UPDATE_ORDER_DATA:
      return {
        ...state,
        orderData: action.data
      }

    case actionTypes.UPDATE_POST_ORDER_ERROR:
      return {
        ...state,
        postOrderError: action.data
      }

    case actionTypes.UPDATE_ERROR_CODES:
      return {
        ...state,
        errorCodes: {
          ...state.errorCodes,
          [action.key]: action.value
        }
      }

    case actionTypes.UPDATE_CAMPAIGN_INFO:
      return {
        ...state,
        campaignInfo: action.data
      }

    default:
      return state
  }
}

export default update
