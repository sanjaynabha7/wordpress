import Axios from "axios";
import API from '../../utils/api'
export const fileImageUpload = async(payload) => {
debugger
    const response = await Axios.post(API.saveFileUpload,payload);
    return response.data['data'];

};