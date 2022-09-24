import { useState } from "react";
import ThreadCard from "../components/Card/thread";
import { threadsGetResponse200Data } from "../toy/threads";
import { threadsGetResponse200 } from "../../types/threads";
/**
 * スレッドの一覧を表示するページ
 */
export const Threads = () => {
    const [threads, setThreads] = useState<threadsGetResponse200>(threadsGetResponse200Data);
    return (
        <div className="py-4">
            <div className="container mx-auto p-4">
                <div className="flex flex-col gap-4">
                    {
                        threads.map((v) => {
                            return (
                                <ThreadCard key={v.id} id={v.id} title={v.title} />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
}

export default Threads;