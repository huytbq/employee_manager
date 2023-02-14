import { setEmployees, setCloseDialog } from 'app/redux/actions/EmployeeActions';
import { call, put } from 'redux-saga/effects';
import { getEmployees, addEmployees, editEmployees, deleteEmployees } from '../requests/employee';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    autoClose: 1500,
    limit: 2
});

export function* handleGetEmployees() {
    try {
        const response = yield call((getEmployees));
        // console.log("get dataaaaaaaaaaaaaaaaaaaaa: ", response.data.data);
        yield put(setEmployees(response.data.data));
    } catch (e) {
        console.log(e);
    }
}

export function* handleAddEmployees({ payload }) {
    try {
        const res = yield call(addEmployees, payload);
        // yield console.log(res);
        if (res.data.data) {
            yield handleGetEmployees();
            yield put(setCloseDialog())
            toast.success('Thêm mới thành công!')
        } else {
            toast.error(res.data.message)
        }
    } catch (e) {
        console.log(e);
    }
}

export function* handleEditEmployees({ payload }) {
    try {
        const res = yield call(editEmployees, payload);
        // yield console.log(res);
        if (res.data.data) {
            yield handleGetEmployees();
            yield put(setCloseDialog())
            toast.success('Chỉnh sửa thành công!')
        } else {
            toast.error(res.data.message)
        }
    } catch (e) {
        console.log(e);
    }
}

export function* handleDeleteEmployees({ payload }) {
    try {
        const res = yield call(deleteEmployees, payload);
        // yield console.log(res);
        if (res.data.data) {
            yield handleGetEmployees();
            toast.success('Xóa thành công!');
        } else {
            toast.error(res.data.message)
        }
    } catch (e) {
        console.log(e);
    }
}