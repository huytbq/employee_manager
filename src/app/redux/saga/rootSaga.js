import { takeLatest } from 'redux-saga/effects'
import { GET_COMMUNES_DATA } from '../actions/CommuneActions'
import { GET_DiSTRICTS_DATA } from '../actions/DistrictActions'
import { GET_PROVINCES_DATA } from '../actions/ProvinceActions';
import { handleGetCommunes } from './handlers/commune'
import { handleGetDistricts } from './handlers/district'
import { handleGetProvinces } from './handlers/province'
import { DELETE_EMPLOYEE_DATA, EDIT_EMPLOYEE_DATA, GET_EMPLOYEE_DATA, ADD_EMPLOYEE_DATA } from '../actions/EmployeeActions'
import { handleAddEmployees, handleDeleteEmployees, handleEditEmployees, handleGetEmployees } from './handlers/employee';

function* mySaga() {
    yield takeLatest(GET_PROVINCES_DATA, handleGetProvinces);
    yield takeLatest(GET_DiSTRICTS_DATA, handleGetDistricts);
    yield takeLatest(GET_COMMUNES_DATA, handleGetCommunes);

    yield takeLatest(GET_EMPLOYEE_DATA, handleGetEmployees);
    yield takeLatest(ADD_EMPLOYEE_DATA, handleAddEmployees);
    yield takeLatest(EDIT_EMPLOYEE_DATA, handleEditEmployees);
    yield takeLatest(DELETE_EMPLOYEE_DATA, handleDeleteEmployees);
}

export default mySaga