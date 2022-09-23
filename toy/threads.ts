import { threadsGetResponse200, threadsGetResponse400, threadsGetResponse500, threadsPostParameters, threadsPostResponse200, threadsPostResponse400, threadsPostResponse500 } from "../types/threads"

export const threadsGetResponse200Data : threadsGetResponse200 = [
    {
        id: "10",
        title: "タイトル"
    },
    {
        id: "20",
        title: "タイトルその２"
    },
    {
        id: "30",
        title: "タイトルその３"
    }
]

export const threadsPostParametersData : threadsPostParameters = {
    path: {},
    query: {},
    body: {
        title: "新しいタイトル"
    }
}

export const threadsGet400ResponseData : threadsGetResponse400 = {
    ErrorCode: 400,
    ErrorMessageJP: "バリデーションエラー",
    ErrorMessageEN: "validation error"
}

export const threadsGet500ResponseData : threadsGetResponse500 = {
    ErrorCode: 500,
    ErrorMessageJP: "サーバでエラーが発生しました。",
    ErrorMessageEN: "Error occured at server."
}

export const threadsPostResponse200Data : threadsPostResponse200 = {
    threadId: "10",
    title: "スレッド"
}

export const threadsPost400ResponseData : threadsPostResponse400 = {
    ErrorCode: 400,
    ErrorMessageJP: "バリデーションエラー",
    ErrorMessageEN: "validation error"
}

export const threadsPost500ResponseData : threadsPostResponse500 = {
    ErrorCode: 500,
    ErrorMessageJP: "サーバでエラーが発生しました。",
    ErrorMessageEN: "Error occured at server."
}
