import { postsGetParameters, postsGetResponse200, postsGetResponse400, postsGetResponse500, postsPostParameters, postsPostResponse200, postsPostResponse400, postsPostResponse500 } from "../../types/posts";

export const postsGetResponse200Data : postsGetResponse200 = {
    threadId: "10",
    posts: [
        {
            id: "1",
            post: "最近は個人勢のVも良いよな👍 \n https://twitter.com/rina_runarina/status/1536325209627582464 \n https://twitter.com/runa_runarina/status/1300805849607073797"
        },
        {
            id: "2",
            post: "どんな子よ"
        },
        {
            id: "3",
            post: "双子Vtuberだけど、かわいい💕オリジナル曲も良いぞぉ \n https://www.youtube.com/watch?v=0z-RVrK2Rg8 \n https://www.youtube.com/watch?v=2SciSwfRz2E"
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
