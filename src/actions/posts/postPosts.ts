import { AxiosError } from "axios";
import { postsPostParameters } from "../../types/posts";
import { apiClient } from "../../utils/apiClient";

export const postPosts = async (parameters: postsPostParameters) => {
    const { path, body } = parameters;
    try {
        // eslint-disable-next-line no-underscore-dangle
        const postsPostResponse = await apiClient.threads._threadId(path.threadId).posts.post({
            body,
        });
        return postsPostResponse.body;
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
