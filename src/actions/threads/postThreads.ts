import { AxiosError } from "axios";
import { threadsPostParameters } from "../../types/threads";
import { apiClient } from "../../utils/apiClient";

export const postThreads = async (parameters: threadsPostParameters) => {
    const { body } = parameters;
    try {
        const threadsPostResponse = await apiClient.threads.post({
            body,
        });
        return threadsPostResponse.body;
    } catch (error) {
        if (error instanceof AxiosError) {
        }
        throw error;
    }
};
