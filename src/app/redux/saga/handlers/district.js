import { setDistricts } from 'app/redux/actions/DistrictActions';
import { call, put } from 'redux-saga/effects'
import { getDistricts } from '../requests/district';

export function* handleGetDistricts() {
    try {
        const response = yield call(getDistricts)
        console.log(response.data.data);
        yield put(setDistricts(response.data.data))
    } catch (error) {
        console.log(error);
    }
}