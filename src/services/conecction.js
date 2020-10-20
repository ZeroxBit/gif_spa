import axios from "axios";
import { base_url, headers as haderDefault } from "../config/config.json"
import Qs from "query-string";

const instanceAxios = axios.create({
    baseURL: base_url
});


instanceAxios.interceptors.request.use(request => {
    request.url += `?${Qs.stringify(haderDefault, {arrayFormat: 'brackets'})}`;
        
    return request;
});


instanceAxios.interceptors.response.use(response => {
    return response;
},
    (error) => {
        if (!error.response) {
            return { data: { data: null }, status: 500 }
        }
        return error.response;
    }
);

export default {

    get: async (path, params) => {
        return await instanceAxios.get(`${path}`, { params });
    },

    post: async (path, data, headers = haderDefault) => {
        return await instanceAxios.post(`/${path}`, data, { headers });
    },

    put: async (path, data, headers = haderDefault) => {
        return await instanceAxios.put(`/${path}`, data, { headers });
    },

    patch: async (path, data, headers = haderDefault) => {
        return await instanceAxios.patch(`/${path}`, data, { headers });
    },

    delete: (path) => {
        return instanceAxios.delete(path)
    }

}

