export const GET_EMPLOYEE_DATA = "GET_EMPLOYEES_DATA";
export const SET_EMPLOYEE_DATA = "SET_EMPLOYEES_DATA";
export const ADD_EMPLOYEE_DATA = "ADD_EMPLOYEES_DATA";
export const EDIT_EMPLOYEE_DATA = "EDIT_EMPLOYEES_DATA";
export const DELETE_EMPLOYEE_DATA = "DELETE_EMPLOYEES_DATA";

export const OPEN_DIALOG = "OPEN_DIALOG";
export const CLOSE_DIALOG = "CLOSE_DIALOG";

export const setOpenDialog = () => {
    return {
        type: OPEN_DIALOG
    }
}

export const setCloseDialog = () => {
    return {
        type: CLOSE_DIALOG
    }
}

export const getEmployees = () => {
    return {
        type: GET_EMPLOYEE_DATA
    }
}

export const setEmployees = (data) => {
    return {
        type: SET_EMPLOYEE_DATA,
        payload: data
    }
}

export const addEmployees = (data) => {
    return {
        type: ADD_EMPLOYEE_DATA,
        payload: data
    }
}

export const editEmployees = (data) => {
    return {
        type: EDIT_EMPLOYEE_DATA,
        payload: data
    }
}

export const deleteEmployees = (data) => {
    return {
        type: DELETE_EMPLOYEE_DATA,
        payload: data
    }
}