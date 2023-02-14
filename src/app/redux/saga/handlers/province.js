import { setProvinces } from 'app/redux/actions/ProvinceActions';
import { call, put } from 'redux-saga/effects'
import { getProvinces } from '../requests/province';

export function* handleGetProvinces() {
    try {
        const response = yield call(getProvinces)
        // console.log(response);
        yield put(setProvinces(response.data.data))
    } catch (error) {
        console.log(error);
    }
}