import { DefineMethods } from "aspida";
import { threadsGetParametersQuery, threadsGetResponse200, threadsGetResponse400, threadsGetResponse500, threadsPostParameters, threadsPostParametersBody, threadsPostResponse200, threadsPostResponse400, threadsPostResponse500 } from "../../../types/threads"

export type Methods = DefineMethods<{
    get: {
        query: threadsGetParametersQuery,
        resBody: threadsGetResponse200 | threadsGetResponse400 | threadsGetResponse500
    },
    post: {
        reqBody: threadsPostParametersBody,
        resBody: threadsPostResponse200 | threadsPostResponse400 | threadsPostResponse500;
    }
}>;