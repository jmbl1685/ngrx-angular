import {
  call,
  put,
  takeEvery,
  takeLatest
} from 'redux-saga/effects'

import { HideModal, RequestApi } from '../actions/actions'
import { fetchData } from './api'

  function* GetApiData(action) {

    try {
      const data = yield call(fetchData)
      yield put(RequestApi(data))
    } catch (e) {
      yield (RequestApi(e))
    }

  }

export default function* mySaga() {
  /* yield takeLatest('HIDE_MODAL', GetApiData) */
}