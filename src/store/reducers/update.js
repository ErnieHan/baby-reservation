import { HYDRATE } from 'next-redux-wrapper'
import { actionTypes } from '../actions/actionTypes'

const initState = {}

const update = (state = initState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.update }
    }

    case actionTypes.UPDATE_PRODUCT_INFO:
      return {
        ...state,
        productInfo: action.data
      }

    default:
      return state
  }
}

export default update
