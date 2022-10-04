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
        }
        throw error;
    }
};
