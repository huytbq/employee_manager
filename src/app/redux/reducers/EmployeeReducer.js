import { SET_EMPLOYEE_DATA, OPEN_DIALOG, CLOSE_DIALOG } from '../actions/EmployeeActions';

const initialState = {
    list: [],
    openDialog: false
}

const EmployeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_DIALOG:
            return {
                ...state,
                openDialog: true
            }
        case CLOSE_DIALOG:
            return {
                ...state,
                openDialog: false
            }
        case SET_EMPLOYEE_DATA:
            return {
                ...state,
                list: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default EmployeeReducer;