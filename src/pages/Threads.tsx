import { useEffect, useState } from "react";
import ThreadCard from "../components/Card/thread";
import { getThreads } from "../actions/threads/getThreads";
import { threadsGetParameters, threadsGetResponse200 } from "../types/threads";

/**
 * Threads page
 */
export const Threads = () => {
    const [threads, setThreads] = useState<threadsGetResponse200>([]);
    const [offset, setOffset] = useState<number>(0);

    const [getParameters, setGetParameters] = useState<threadsGetParameters>({
        path: {},
        query: {
            offset: "1"
        },
        body: {}
    });

    const getTrueOffset = (v: number) => {
        return (v * 10).toString();
    }

    // setTrueOffset from offset to setGetParameters
    useEffect(() => {
        const trueOffset = getTrueOffset(offset);
        setGetParameters({
            ...getParameters, query: {
                offset: trueOffset
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset]);

    // Get threads data from backend api
    useEffect(() => {
        const exec = async () => {
            try {
                const threadsGetResponse = await getThreads(getParameters);
                console.log(threadsGetResponse);
                setThreads(threadsGetResponse);
            } catch (error) {
                /**
                 * @todo Axios関連のエラーは既に共通エラーハンドリングされている
                 */
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