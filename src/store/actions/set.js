import { actionTypes } from './actionTypes'

export const setActiveContainer = data => {
  return { type: actionTypes.SET_ACTIVE_CONTAINER, data }
}
