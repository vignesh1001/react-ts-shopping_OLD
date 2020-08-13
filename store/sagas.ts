import { all } from '@redux-saga/core/effects'
import { commonSaga } from './common/sagas';
import { homeSaga } from './home/sagas'
import { categorySaga } from './category/sagas'
import { productSaga } from './productList/sagas'
export default function* rootSaga() {
  yield all([commonSaga(), homeSaga(), categorySaga(), productSaga()])
}
