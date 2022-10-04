import { AxiosError } from "axios";
import { postsGetParameters } from "../../types/posts";
import { apiClient } from "../../utils/apiClient";

export const getPosts = async (parameters: postsGetParameters) => {
    const { path, query } = parameters;
    try {
        // eslint-disable-next-line no-underscore-dangle
        const threadsGetResponse = await apiClient.threads._threadId(path.threadId).posts.get({
            query,
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
};
