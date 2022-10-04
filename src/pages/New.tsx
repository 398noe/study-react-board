import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postThreads } from "../actions/threads/postThreads";
import { threadsPostParameters } from "../types/threads";

export const New = () => {
    const [threadName, setThreadName] = useState<string>("");

    // for redirect
    const navigate = useNavigate();

    const [postParameters, setPostParameters] = useState<threadsPostParameters>({
        path: {},
        query: {},
        body: {
            title: "",
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setThreadName(e.target.value);
    };

    useEffect(() => {
        setPostParameters({
            ...postParameters,
            body: {
                title: threadName,
            },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [threadName]);

    // 新規作成ボタンを押した際にPOSTを発行し、発行後そのthreadIdに移動
    const createNewThread = async () => {
        try {
            const threadsPostResponse = await postThreads(postParameters);
            console.log(threadsPostResponse);
            // 正常に発行されたら、threadIdに移動
            navigate(`/thread/${threadsPostResponse.threadId}`);
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return (
        <div className="py-4">
            <div className="container max-w-md mx-auto p-4">
                <p className="p-4 text-3xl font-bold text-center">スレッドを作成</p>
                <div className="flex flex-col gap-4">
                    <p>スレッド名</p>
                    <input type="text" className="input input-bordered" value={threadName} onChange={handleChange} />
                    <div
                        className="btn w-24 ml-auto"
                        onClick={() => {
                            createNewThread();
                        }}
                        onKeyDown={() => {
                            createNewThread();
                        }}
                    >
                        新規作成
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;
