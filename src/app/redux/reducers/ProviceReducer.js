import { SET_PROVINCES_DATA } from "../actions/ProvinceActions"

const initialState = {
    list: []
}

const ProvinceReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROVINCES_DATA:
            return {
                ...state,
                list: [...action.payload]
            }
        default:
            return state
    }
}

export default ProvinceReducer