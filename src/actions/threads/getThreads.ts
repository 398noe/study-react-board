import { AxiosError } from "axios";
import { threadsGetParameters } from "../../types/threads";
import { apiClient } from "../../utils/apiClient";

export const getThreads = async (parameters: threadsGetParameters) => {
    const { query } = parameters;
    try {
        const threadsGetResponse = await apiClient.threads.get({
            query,
        });
        return threadsGetResponse.body;
    } catch (error) {
        if (error instanceof AxiosError) {
        }
        throw error;
    }
};
