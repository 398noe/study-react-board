import axios, { AxiosError } from "axios";
import aspida from "@aspida/axios";
import api from "../api/$api";
import { store } from "../store/store";
import { setErrors } from "../store/errors";
import { response400Data, response404Data, response500Data } from "./errorRespnose";

export const apiClient = api(aspida(axios, {
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 10000
}));

/**
 * Errorhandling
 */
axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error instanceof AxiosError) {
        if (error.response) {
            console.error(error.response.data);
            switch (error.response.status) {
                case 400:
                    // Validation Error
                    // response400 | response404 | response500型のデータを渡してあげる
                    store.dispatch(setErrors(response400Data));
                    break;
                case 404:
                    // Not Exist
                    store.dispatch(setErrors(response404Data));
                    break;
                case 500:
                    // Internal Server Error
                    store.dispatch(setErrors(response500Data));
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