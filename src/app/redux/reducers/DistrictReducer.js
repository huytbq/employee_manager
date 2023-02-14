import { SET_DiSTRICTS_DATA } from "../actions/DistrictActions"

const initialState = {
    list: []
}

const DistrictReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DiSTRICTS_DATA:
            return {
                ...state,
                list: [...action.payload]
            }
        default:
            return state
    }
}

export default DistrictReducer