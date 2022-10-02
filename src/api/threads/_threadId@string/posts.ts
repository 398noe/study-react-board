import { DefineMethods } from "aspida";
import { postsGetParametersQuery, postsGetResponse200, postsPostParametersBody, postsPostResponse200 } from "../../../types/posts";

export type Methods = DefineMethods<{
    get: {
        query: postsGetParametersQuery,
        resBody: postsGetResponse200
    },
    post: {
        reqBody: postsPostParametersBody,
        resBody: postsPostResponse200
    }
}>;