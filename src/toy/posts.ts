import { postsGetParameters, postsGetResponse200, postsGetResponse400, postsGetResponse500, postsPostParameters, postsPostResponse200, postsPostResponse400, postsPostResponse500 } from "../../types/posts";

export const postsGetResponse200Data : postsGetResponse200 = {
    threadId: "10",
    posts: [
        {
            id: "1",
            post: "最近は個人勢のVも良いよな👍"
        },
        {
            id: "2",
            post: "どんな子よ"
        },
        {
            id: "3",
            post: "この子。双子Vtuberだけど、かわいい💕 \n Twitter : https://twitter.com/rina_runarina \n YouTube : https://www.youtube.com/channel/UCCKUwAw-qOGGGbSEKPCrncQ"
        }
    ]
}

export const postsGetParametersData : postsGetParameters = {
    path: {
        threadId: "10"
    },
    query: {
        offset: "10"
    },
    body: {
    }
}

export const postsGet400ResponseData : postsGetResponse400 = {
    ErrorCode: 400,
    ErrorMessageJP: "バリデーションエラー",
    ErrorMessageEN: "validation error"
}

export const postsGet500ResponseData : postsGetResponse500 = {
    ErrorCode: 500,
    ErrorMessageJP: "サーバでエラーが発生しました。",
    ErrorMessageEN: "Error occured at server."
}

export const postsPostResponse200Data : postsPostResponse200 = {
    postId: "10",
    threadId: "10",
    post: "投稿内容"
}

export const postsPost400ResponseData : postsPostResponse400 = {
    ErrorCode: 400,
    ErrorMessageJP: "バリデーションエラー",
    ErrorMessageEN: "validation error"
}

export const postsPost500ResponseData : postsPostResponse500 = {
    ErrorCode: 500,
    ErrorMessageJP: "サーバでエラーが発生しました。",
    ErrorMessageEN: "Error occured at server."
}
