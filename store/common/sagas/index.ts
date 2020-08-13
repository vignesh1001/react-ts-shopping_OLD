import { all, takeLatest } from 'redux-saga/effects'
import { getTopCategories, getFooter } from './common'
import {UPDATE_HEADER_LOAD,UPDATE_FOOTER_LOAD} from '../actions';
export function* commonSaga() {
  yield all([
    takeLatest(UPDATE_FOOTER_LOAD,getFooter),
    takeLatest(UPDATE_HEADER_LOAD,getTopCategories),
    getFooter(),
    getTopCategories()
  ])
}
