import type { AspidaClient } from "aspida";
import { dataToURLString } from "aspida";
import type { Methods as Methods0 } from "./threads";
import type { Methods as Methods1 } from "./threads/_threadId@string/posts";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
    const prefix = (baseURL === undefined ? "" : baseURL).replace(/\/$/, "");
    const PATH0 = "/threads";
    const PATH1 = "/posts";
    const GET = "GET";
    const POST = "POST";

    return {
        threads: {
            _threadId: (val1: string) => {
                const prefix1 = `${PATH0}/${val1}`;

                return {
                    posts: {
                        get: (option: { query: Methods1["get"]["query"]; config?: T | undefined }) =>
                            fetch<Methods1["get"]["resBody"]>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
                        $get: (option: { query: Methods1["get"]["query"]; config?: T | undefined }) =>
                            fetch<Methods1["get"]["resBody"]>(prefix, `${prefix1}${PATH1}`, GET, option)
                                .json()
                                .then((r) => r.body),
                        post: (option: { body: Methods1["post"]["reqBody"]; config?: T | undefined }) =>
                            fetch<Methods1["post"]["resBody"]>(prefix, `${prefix1}${PATH1}`, POST, option).json(),
                        $post: (option: { body: Methods1["post"]["reqBody"]; config?: T | undefined }) =>
                            fetch<Methods1["post"]["resBody"]>(prefix, `${prefix1}${PATH1}`, POST, option)
                                .json()
                                .then((r) => r.body),
                        $path: (option?: { method?: "get" | undefined; query: Methods1["get"]["query"] } | undefined) =>
                            `${prefix}${prefix1}${PATH1}${
                                option && option.query ? `?${dataToURLString(option.query)}` : ""
                            }`,
                    },
                };
            },
            get: (option: { query: Methods0["get"]["query"]; config?: T | undefined }) =>
                fetch<Methods0["get"]["resBody"]>(prefix, PATH0, GET, option).json(),
            $get: (option: { query: Methods0["get"]["query"]; config?: T | undefined }) =>
                fetch<Methods0["get"]["resBody"]>(prefix, PATH0, GET, option)
                    .json()
                    .then((r) => r.body),
            post: (option: { body: Methods0["post"]["reqBody"]; config?: T | undefined }) =>
                fetch<Methods0["post"]["resBody"]>(prefix, PATH0, POST, option).json(),
            $post: (option: { body: Methods0["post"]["reqBody"]; config?: T | undefined }) =>
                fetch<Methods0["post"]["resBody"]>(prefix, PATH0, POST, option)
                    .json()
                    .then((r) => r.body),
            $path: (option?: { method?: "get" | undefined; query: Methods0["get"]["query"] } | undefined) =>
                `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ""}`,
        },
    };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
