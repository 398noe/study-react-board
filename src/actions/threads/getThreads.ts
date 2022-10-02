// import AxiosError from "@aspida/axios";
import { AxiosError } from "axios";
import { threadsGetParameters } from "../../types/threads";
import { apiClient } from "../../utils/apiClient";

export const getThreads = async (parameters: threadsGetParameters) => {
    const { query } = parameters;
    try {
        const threadsGetResponse = await apiClient.threads.get({
            query
        });
        return threadsGetResponse.body;
    } catch (error) {
        if (error instanceof AxiosError) {
            // https://zenn.dev/yumemi_inc/articles/2022-02-13-ts-type-safe-request
            // Custom HookでError Messageを保存しておこう
        }
        throw error;
    }
}
