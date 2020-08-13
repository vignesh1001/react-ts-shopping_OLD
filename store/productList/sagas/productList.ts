import { call, put, select } from 'redux-saga/effects'
//import { history } from '../..'
import productList from '../../../apis/productList'
import { logger } from '../../../utils/logger';
import {
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_BC_SUCCESS,
  UPDATE_BC_FAILURE
} from '../actions';

export function* getProduct(action: any) {
  console.log("action",action)
  
  let data = action.payload;
  try {
      const product = yield call(productList.getProductData, data);
      yield put({ type: UPDATE_PRODUCT_SUCCESS, product })
    } catch (error) {
      if (error && error.response && error.response.status === 404) {
        yield put({ type: UPDATE_PRODUCT_FAILURE })
    }
}
}

export function* getBC(action: any) {
  console.log("action",action)
  let data = action.payload;
  try {
      const bc = yield call(productList.getBCData, data);
      yield put({ type: UPDATE_BC_SUCCESS, bc })
    } catch (error) {
      // User profile is not found
      if (error && error.response && error.response.status === 404) {
        yield put({ type: UPDATE_BC_FAILURE })
      }
    }
}
