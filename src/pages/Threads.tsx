import React, { useEffect, useState } from "react";
import ThreadCard from "../components/Card/Thread";
import { getThreads } from "../actions/threads/getThreads";
import { threadsGetParameters, threadsGetResponse200 } from "../types/threads";
import { getTrueOffset } from "../utils/offset";

/**
 * Threads page
 */
export const Threads = () => {
    const [threads, setThreads] = useState<threadsGetResponse200>([]);
    const [offset, setOffset] = useState<number>(1);

    const [getParameters, setGetParameters] = useState<threadsGetParameters>({
        path: {},
        query: {
            offset: "0",
        },
        body: {},
    });

    const handlePrevious = () => {
        setOffset((prev) => {
            const newOffset = prev - 1;
            if (newOffset < 1) {
                return 1;
            }
            return newOffset;
        });
    };

    const handleNext = () => {
        setOffset((prev) => {
            const newOffset = prev + 1;
            return newOffset;
        });
    };

    // setTrueOffset from offset to setGetParameters
    useEffect(() => {
        const trueOffset = getTrueOffset(offset);
        setGetParameters({
            ...getParameters,
            query: {
                offset: trueOffset,
            },
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
        exec();
        // eslint-disable-next-line
    }, [getParameters]);

    return (
        <div className="py-4">
            <div className="container mx-auto p-4">
                <p className="p-4 text-3xl font-bold text-center">スレッド一覧</p>
                <div className="flex flex-col gap-4">
                    {threads.map((v) => {
                        return <ThreadCard key={v.id} id={v.id} title={v.title} />;
                    })}
                </div>
            </div>
            <div className="container mx-auto p-4">
                <div className="flex flex-col gap-8 items-center justify-center">
                    <div className="btn-group">
                        {offset <= 1 ? (
                            <div className="btn btn-disabled" onClick={handlePrevious} onKeyDown={handlePrevious}>
                                «
                            </div>
                        ) : (
                            <div className="btn" onClick={handlePrevious} onKeyDown={handlePrevious}>
                                «
                            </div>
                        )}
                        <div className="btn">Page {offset}</div>
                        <div className="btn" onClick={handleNext} onKeyDown={handleNext}>
                            »
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Threads;
