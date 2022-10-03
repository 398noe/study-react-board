import { response400, response404, response500 } from "../types/util";

export const response400Data : response400 = {
    ErrorCode: 400,
    ErrorMessageJP: "バリデーションエラー",
    ErrorMessageEN: "validation error"
}

export const response404Data : response404 = {
    ErrorCode: 404,
    ErrorMessageJP: "そのスレッドは存在しません。",
    ErrorMessageEN: "This thread is not exists."
}

export const response500Data : response500 = {
    ErrorCode: 500,
    ErrorMessageJP: "サーバでエラーが発生しました。",
    ErrorMessageEN: "Error occured at server."
}