import { HYDRATE } from 'next-redux-wrapper'
import { actionTypes } from '../actions/actionTypes'

const initState = {
  scrollTop: 0,
  subMenuOpen: false,
  checkoutStep: 1,
  selectedStore: null,
  selectedBank: null,
  buyerInfo: {
    salutation: '01',
    firstName: '',
    lastName: '',
    mobile: ''
  },
  buyerInfoErrors: {
    firstName: false,
    lastName: false,
    mobile: false
  },
  language: 'tc',
  isLoading: false,
  agreeConfirmOrder: false,
  deadline: 0,
  activePayment: null,
  taelItems: [],
  toggleStarDialog: false,
  toggleMaintainDialog: false,
  isCookieBarActive: null
}

const set = (state = initState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.set }
    }

    case actionTypes.SET_SCROLL_TOP:
      return {
        ...state,
        scrollTop: action.data
      }

    case actionTypes.SET_CHECKOUT_STEP:
      return {
        ...state,
        checkoutStep: action.step
      }

    case actionTypes.SET_SUB_MENU_OPEN:
      return {
        ...state,
        subMenuOpen: action.bool
      }

    case actionTypes.SET_TAEL05_QUANTITY:
      return {
        ...state,
        tael05Quantity: action.quantity
      }

    case actionTypes.SET_TAEL1_QUANTITY:
      return {
        ...state,
        tael1Quantity: action.quantity
      }

    case actionTypes.SET_TAEL5_QUANTITY:
      return {
        ...state,
        tael5Quantity: action.quantity
      }

    case actionTypes.SET_SELECTED_STORES:
      return {
        ...state,
        selectedStore: action.data
      }

    case actionTypes.SET_SELECTED_BANK:
      return {
        ...state,
        selectedBank: action.data
      }

    case actionTypes.SET_LANGUAGE:
      return {
        ...state,
        language: action.language
      }

    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.bool
      }

    case actionTypes.SET_BUYER_INFO:
      return {
        ...state,
        buyerInfo: {
          ...state.buyerInfo,
          [action.key]: action.value
        }
      }

    case actionTypes.SET_BUYER_INFO_ERRORS:
      return {
        ...state,
        buyerInfoErrors: {
          ...state.buyerInfoErrors,
          [action.key]: action.bool
        }
      }

    case actionTypes.SET_DEADLINE:
      return {
        ...state,
        deadline: action.data
      }

    case actionTypes.SET_ACTIVE_PAYMENT:
      return {
        ...state,
        activePayment: action.data
      }

    case actionTypes.SET_TAEL_ITEMS:
      return {
        ...state,
        taelItems: action.data
      }

    case actionTypes.SET_TOGGLE_STAR_DIALOG:
      return {
        ...state,
        toggleStarDialog: action.bool
      }

    case actionTypes.SET_TOGGLE_MAINTAIN_DIALOG:
      return {
        ...state,
        toggleMaintainDialog: action.bool
      }

    case actionTypes.SET_IS_COOKIE_BAR_ACTIVE:
      return {
        ...state,
        isCookieBarActive: action.bool
      }

    default:
      return state
  }
}

export default set
