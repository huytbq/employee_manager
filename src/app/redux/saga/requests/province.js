import axios from "axios";
import ConstantList from "../../../appConfig";


export const getProvinces = () => {
    return axios.post(ConstantList.API_ENPOINT + '/provinces/' + 'search', {})
}