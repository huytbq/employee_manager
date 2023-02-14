
export const GET_PROVINCES_DATA = 'GET_PROVINCES_DATA'
export const SET_PROVINCES_DATA = 'SET_PROVINCES_DATA'


export const getProvinces = () => {
    return {
        type: GET_PROVINCES_DATA
    }
}

export const setProvinces = (data) => {
    return {
        type: SET_PROVINCES_DATA,
        payload: data
    }
}
