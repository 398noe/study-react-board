import { useEffect, useState } from "react";
import ThreadCard from "../components/Card/thread";
import { threadsGetResponse200Data } from "../toy/threads";
import { threadsGetResponse200 } from "../../types/threads";
import { apiClient } from "../utils/apiClient";
/**
 * スレッドの一覧を表示するページ
 */
export const Threads = () => {
    const [threads, setThreads] = useState<threadsGetResponse200>(threadsGetResponse200Data);

    // Get threads data from backend api
    useEffect(() => {
        const exec = async () => {
            const threadsGetResponse = await apiClient.threads.$get({
                query: {
                    offset: "1"
                }
            }).catch((err) => {
                
            });
            console.log(threadsGetResponse200Data);
            
            setThreads(threadsGetResponse200Data);
        };
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        exec();
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