import { SET_COMMUNES_DATA } from '../actions/CommuneActions'

const initialState = {
    list: []
}

const CommuneReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMUNES_DATA:
            return {
                ...state,
                list: [...action.payload]
            }
        default:
            return state
    }
}

export default CommuneReducer
