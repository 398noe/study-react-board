/**
 * @file apiClient.ts
 * @author 398noe
 * @description HTTP Client with aspida and axios
 */
import axios, { AxiosError } from "axios";
import aspida from "@aspida/axios";
import api from "../api/$api";
import { store } from "../store/store";
import { setErrors } from "../store/errors";
import { response400Data, response404Data, response500Data } from "./errorRespnose";

/**
 * Define apiClient
 */
export const apiClient = api(
    aspida(axios, {
        baseURL: process.env.REACT_APP_BASE_URL,
    })
);

/**
 * Make error handling of axios
 */
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error instanceof AxiosError) {
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        store.dispatch(setErrors(response400Data));
                        break;
                    case 404:
                        store.dispatch(setErrors(response404Data));
                        break;
                    case 500:
                        store.dispatch(setErrors(response500Data));
                        break;
                    default:
                        console.error("Any other axios error has occured.");
                        break;
                }
            }
        }
        return Promise.reject(error);
    }
);
