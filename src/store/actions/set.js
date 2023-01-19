import { actionTypes } from './actionTypes'

export const setScrollTop = data => {
  return { type: actionTypes.SET_SCROLL_TOP, data }
}

export const setCheckoutStep = step => {
  return { type: actionTypes.SET_CHECKOUT_STEP, step }
}

export const setSubMenuOpen = bool => {
  return { type: actionTypes.SET_SUB_MENU_OPEN, bool }
}

export const setSelectedStore = data => {
  return { type: actionTypes.SET_SELECTED_STORES, data }
}

export const setSelectedBank = data => {
  return { type: actionTypes.SET_SELECTED_BANK, data }
}

export const setLanguage = language => {
  return { type: actionTypes.SET_LANGUAGE, language }
}

export const setLoading = bool => {
  return { type: actionTypes.SET_LOADING, bool }
}

export const setBuyerInfo = (key, value) => {
  return { type: actionTypes.SET_BUYER_INFO, key, value }
}

export const setBuyerInfoErrors = (key, bool) => {
  return { type: actionTypes.SET_BUYER_INFO_ERRORS, key, bool }
}

export const setDeadline = data => {
  return { type: actionTypes.SET_DEADLINE, data }
}

export const setActivePayment = data => {
  return { type: actionTypes.SET_ACTIVE_PAYMENT, data }
}

export const setTaelItems = data => {
  return { type: actionTypes.SET_TAEL_ITEMS, data }
}

export const setToggleStarDialog = bool => {
  return { type: actionTypes.SET_TOGGLE_STAR_DIALOG, bool }
}

export const setToggleMaintainDialog = bool => {
  return { type: actionTypes.SET_TOGGLE_MAINTAIN_DIALOG, bool }
}

export const setIsCookieBarActive = bool => {
  return { type: actionTypes.SET_IS_COOKIE_BAR_ACTIVE, bool }
}

