import { DefineMethods } from "aspida";
import { postsGetParametersQuery, postsGetResponse200, postsGetResponse400, postsGetResponse500, postsPostParametersBody, postsPostResponse200, postsPostResponse400, postsPostResponse500 } from "../../../../types/posts";

export type Methods = DefineMethods<{
    get: {
        query: postsGetParametersQuery,
        resBody: postsGetResponse200 | postsGetResponse400 | postsGetResponse500;
    },
    post: {
        reqBody: postsPostParametersBody,
        resBody: postsPostResponse200 | postsPostResponse400 | postsPostResponse500;
    }
}>;