import { all, takeLatest } from 'redux-saga/effects'
import { getProduct, getBC } from './productList'
import {UPDATE_BC_LOAD,UPDATE_PRODUCT_LOAD} from '../actions';
export function* productSaga() {
  yield all([
    takeLatest(UPDATE_PRODUCT_LOAD,getProduct),
    takeLatest(UPDATE_BC_LOAD,getBC)
  ])
}
