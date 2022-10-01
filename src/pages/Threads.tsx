import { useEffect, useState } from "react";
import ThreadCard from "../components/Card/thread";
import { threadsGetResponse200Data } from "../toy/threads";
import { threadsGetParameters, threadsGetResponse200 } from "../../types/threads";
import { apiClient } from "../utils/apiClient";
import { getThreads } from "../actions/threads/getThreads";
/**
 * スレッドの一覧を表示するページ
 */
export const Threads = () => {
    const [threads, setThreads] = useState<threadsGetResponse200>(threadsGetResponse200Data);

    const [getParameters, setGetParameters] = useState<threadsGetParameters>({
        path: {},
        query: {
            offset: "-1"
        },
        body: {}
    });
    // Get threads data from backend api
    useEffect(() => {
        const exec = async () => {
            try {
                const threadsGetResponse = await getThreads(getParameters);
                console.log(threadsGetResponse);    
            } catch (error) {
                console.error(error);
                throw error;
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        exec();
        // eslint-disable-next-line
    }, []);
    return (
        <div className="py-4">
            <div className="container mx-auto p-4">
                <p className="p-4 text-3xl font-bold text-center">スレッド一覧</p>
                <div className="flex flex-col gap-4">
                    {
                        threads.map((v) => {
                            return (
                                <ThreadCard key={v.id} id={v.id} title={v.title} />
                            );
                        })
                    }
                </div>
            </div>
            <div className="container mx-auto p-4">
                <div className="form-control">
                    <div className="flex flex-col gap-8 items-center justify-center">
                        <div className="btn-group">
                            <div className="btn">1</div>
                            <div className="btn btn-disabled">...</div>
                            <input className="input input-bordered rounded-none w-16" type="text" />
                            <div className="btn">n+1</div>
                            <div className="btn">GO</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Threads;