import { DefineMethods } from "aspida";
import { threadsGetParametersQuery, threadsGetResponse200, threadsPostParametersBody, threadsPostResponse200 } from "../../../types/threads"

export type Methods = DefineMethods<{
    get: {
        query: threadsGetParametersQuery,
        resBody: threadsGetResponse200
    },
    post: {
        reqBody: threadsPostParametersBody,
        resBody: threadsPostResponse200
    }
}>;