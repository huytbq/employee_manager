import { setCommunes } from 'app/redux/actions/CommuneActions'
import { call, put } from 'redux-saga/effects'
import { getCommunes } from '../requests/commune'

export function* handleGetCommunes() {
    try {
        const response = yield call(getCommunes)
        // console.log(response);
        yield put(setCommunes(response.data.data))
    } catch (error) {
        console.log(error)
    }
}