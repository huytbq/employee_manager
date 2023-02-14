import axios from "axios";
import ConstantList from "../../../appConfig";


export const getCommunes = () => {
    return axios.post(ConstantList.API_ENPOINT + '/communes/' + 'search', {})
}