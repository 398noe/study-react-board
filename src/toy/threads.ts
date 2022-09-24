import { threadsGetResponse200, threadsGetResponse400, threadsGetResponse500, threadsPostParameters, threadsPostResponse200, threadsPostResponse400, threadsPostResponse500 } from "../../types/threads";

export const threadsGetResponse200Data : threadsGetResponse200 = [
    {
        id: "10",
        title: "推しボード初心者向け"
    },
    {
        id: "20",
        title: "自分の推しVtuberを語るスレ"
    },
    {
        id: "30",
        title: "質問：配信者になってみたい"
    },
    {
        id: "40",
        title: "個人勢Vtuberが一番だよな？？？"
    },
    {
        id: "50",
        title: "今日も推しが尊い"
    },
    {
        id: "60",
        title: "お前ら、引退してしまったVtuberを挙げてけ"
    },
    {
        id: "70",
        title: "今日のイチオシVtuber"
    },
    {
        id: "80",
        title: "好きなASMR系Vtuber教えてくれ"
    },
    {
        id: "90",
        title: "Vtuber始めてからもう3年経つけど何か質問ある？"
    },
    {
        id: "100",
        title: "このVの歌声が好き"
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
