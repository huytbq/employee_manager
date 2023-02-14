import ConstantList from "../../../appConfig";
import axios from "axios";


export const getEmployees = () => {
    return axios.post(ConstantList.API_ENPOINT + "/employees/search", {});
}

export const addEmployees = (data) => {
    return axios.post(ConstantList.API_ENPOINT + "/employees", data).then(res => res)
}

export const editEmployees = (data) => {
    return axios.put(ConstantList.API_ENPOINT + "/employees/" + data.id, data).then(res => res)
}

export const deleteEmployees = (data) => {
    return axios.delete(ConstantList.API_ENPOINT + "/employees/" + data.id).then(res => res)
    // console.log(response);
}