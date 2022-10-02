export type parameters = {
    path: {},
    query: {},
    body: {}
}

export type responseError = {
    ErrorCode: number | null,
    ErrorMessageJP: string | null,
    ErrorMessageEN: string | null
}

export type response400 = responseError & {
    ErrorCode: 400
}

export type response404 = responseError & {
    ErrorCode: 404
}
export type response500 = responseError & {
    ErrorCode: 500
};
