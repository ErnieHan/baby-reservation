import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { actionTypes } from '../actions/actionTypes'
import { HOST_GATEWAY_URL } from '../../constants'
import { updateProductInfo } from '../actions/update'

function* getProductInfoSaga(context) {
  const { language } = context
  try {
    const response = yield fetch(
      `${HOST_GATEWAY_URL}/shopping/v1/compositions/productDetails/info`
    )
    if (response.ok) {
      const result = yield response.json()
      yield put(updateProductInfo(result))
    } else {
      throw new Error('GET_PRODUCT_INFO_FAILED')
    }
  } catch (error) {
    console.error(error)
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.GET_PRODUCT_INFO, getProductInfoSaga)])
}

export default rootSaga
