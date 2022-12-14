import { parameters, response400, response500 } from "./util";

export type threads = Array<thread>;

export type thread = {
    id: string;
    title: string;
};

export type threadsGetParametersQuery = {
    offset: string;
};

export interface threadsGetParameters extends parameters {
    path: {};
    query: threadsGetParametersQuery;
    body: {};
}

export type threadsGetResponse200 = threads;

export type threadsGetResponse400 = response400;
export type threadsGetResponse500 = response500;

export type threadsPostParametersBody = {
    title: string;
};

export interface threadsPostParameters extends parameters {
    path: {};
    query: {};
    body: threadsPostParametersBody;
}

export type threadsPostResponse200 = {
    threadId: string;
    title: string;
};

export type threadsPostResponse400 = response400;
export type threadsPostResponse500 = response500;
