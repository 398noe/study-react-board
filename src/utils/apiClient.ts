import axios, { AxiosError } from "axios";
import aspida from "@aspida/axios";
import api from "../api/$api";

export const apiClient = api(aspida(axios, {
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 10000
}));

/**
 * Errorhandling
 */
axios.interceptors.request.use(response => {
    return response;
}, error => {
    if (error instanceof AxiosError) {
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    // Validation Error
                    console.error(error.response.data);
                    break;
                case 404:
                    // Not Exist
                    console.error(error.response.data);
                    break;
                case 500:
                    // Internal Server Error
                    console.error(error.response.data);
                    break;
                default:
                    console.error("Any other axios error has occured.");
                    break;
            }
        }
        // When it's axios error
    }
    return Promise.reject(error);
});
