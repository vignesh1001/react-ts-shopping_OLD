import { call, put, select } from 'redux-saga/effects'
//import { history } from '../..'
import common from '../../../apis/common'
import { logger } from '../../../utils/logger';
import {
  APP_START,
  UPDATE_FOOTER_FAILURE,
  UPDATE_FOOTER_SUCCESS,
  UPDATE_TOP_CATEGORIES,
  UPDATE_TOP_FAILURE
} from '../actions';

export function* getFooter() {
  try {
      const footer = yield call(common.getFooterSections);
      yield put({ type: UPDATE_FOOTER_SUCCESS, footer })
    } catch (error) {
      if (error && error.response && error.response.status === 404) {
        yield put({ type: UPDATE_FOOTER_FAILURE })
    }
}
}

export function* getTopCategories() {
  try {
    yield put({type: APP_START})
      const header = yield call(common.getTopCategories);
      yield put({ type: UPDATE_TOP_CATEGORIES, header })
    } catch (error) {
      // User profile is not found
      if (error && error.response && error.response.status === 404) {
        yield put({ type: UPDATE_TOP_FAILURE })
        //yield call(logger, 'USER NOT FOUND')
        //yield localStorage.setItem(REDIRECT_URI, window.location.pathname)
        //yield history.push('/')
      }
    }
}
