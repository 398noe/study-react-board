import { parameters, response400, response500 } from "./util";

export type posts = Array<post>;

export type post = {
    id: string;
    post: string;
};

export type postsGetParametersQuery = {
    offset: string;
};

export type postsGetParametersPath = {
    threadId: string;
};

export interface postsGetParameters extends parameters {
    path: postsGetParametersPath;
    query: postsGetParametersQuery;
    body: {};
}

export type postsGetResponse200 = {
    threadId: string;
    title: string;
    posts: posts;
};

export type postsGetResponse400 = response400;
export type postsGetResponse404 = response400;
export type postsGetResponse500 = response500;

export type postsPostParametersBody = {
    post: string;
};

export interface postsPostParameters extends parameters {
    path: {
        threadId: string;
    };
    query: {};
    body: postsPostParametersBody;
}

export type postsPostResponse200 = {
    postId: string;
    threadId: string;
    post: string;
};

export type postsPostResponse400 = response400;
export type postsPostResponse500 = response500;
