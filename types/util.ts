export type parameters = {
    path: {},
    query: {},
    body: {}
}

export type response400 = {
    ErrorCode: number,
    ErrorMessageJP: string,
    ErrorMessageEN: string
}

export type response500 = response400;