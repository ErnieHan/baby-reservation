import { HYDRATE } from 'next-redux-wrapper'
import { actionTypes } from '../actions/actionTypes'

const initState = {
  activeContainer: 'lesson'
}

const set = (state = initState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.set }
    }

    case actionTypes.SET_ACTIVE_CONTAINER:
      return {
        ...state,
        activeContainer: action.data
      }

    default:
      return state
  }
}

export default set
