export const GET_COMMUNES_DATA = 'GET_COMMUNES_DATA'
export const SET_COMMUNES_DATA = 'SET_COMMUNES_DATA'

export const getCommunes = () => {
    return {
        type: GET_COMMUNES_DATA
    }
}

export const setCommunes = (data) => {
    return {
        type: SET_COMMUNES_DATA,
        payload: data
    }
}