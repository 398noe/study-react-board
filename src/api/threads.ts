import { threadsGetResponse200, threadsPostParameters, threadsPostParametersBody, threadsPostResponse200 } from "../../types/threads"

export type Methods = {
    get: {
        resBody: threadsGetResponse200
    },
    post: {
        reqBody: threadsPostParametersBody,
        resBody: threadsPostResponse200
    }
}