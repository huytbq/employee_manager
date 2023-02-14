import axios from "axios";
import ConstantList from "../../../appConfig";


export const getDistricts = () => {
    return axios.post(ConstantList.API_ENPOINT + '/districts/' + 'search', {})
}