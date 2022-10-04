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
            /**
             * @link https://zenn.dev/yumemi_inc/articles/2022-02-13-ts-type-safe-request
             * @todo Error Messageの保存については共通のエラーハンドリングを実装済み
             */
        }
        throw error;
    }
};
