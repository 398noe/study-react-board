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
            /**
             * @link https://zenn.dev/yumemi_inc/articles/2022-02-13-ts-type-safe-request
             * @todo Error Messageの保存については共通のエラーハンドリングを実装済み
             */
        }
        throw error;
    }
}
