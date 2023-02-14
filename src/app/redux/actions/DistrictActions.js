
export const GET_DiSTRICTS_DATA = 'GET_DISTRICTS_DATA'
export const SET_DiSTRICTS_DATA = 'SET_DiSTRICTS_DATA'


export const getDistricts = () => {
    return {
        type: GET_DiSTRICTS_DATA
    }
}

export const setDistricts = (data) => {
    return {
        type: SET_DiSTRICTS_DATA,
        payload: data
    }
}
