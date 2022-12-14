import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postsGetParameters, postsGetResponse200, postsPostParameters } from "../../types/posts";
import { PostCard } from "../../components/Card/Post";
import { getPosts } from "../../actions/posts/getPosts";
import { useSelector } from "../../store/store";
import { errors } from "../../store/errors";
import { getTrueOffset } from "../../utils/offset";
import { postPosts } from "../../actions/posts/postPosts";

/**
 * 掲示板スレッド内を表示するアプリ
 */
export const Posts = () => {

    const { threadId } = useParams();
    const errorsMessage = useSelector(errors);
    const [posts, setPosts] = useState<postsGetResponse200>();

    const [offset, setOffset] = useState<number>(1);
    const [newPost, setNewPost] = useState<string>("");

    const [getParameters, setGetParameters] = useState<postsGetParameters>({
        path: {
            // react-routerから取得したthreadIdを充てる
            threadId: threadId ?? "0",
        },
        query: {
            offset: "0",
        },
        body: {},
    });

    const [postParameters, setPostParameters] = useState<postsPostParameters>({
        path: {
            threadId: threadId ?? "0",
        },
        query: {},
        body: {
            post: "",
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewPost(e.target.value);
    };

    /**
     * 本来はreduxのreducersで管理したいところ
     * postsのoffsetとthreadsのoffsetを混ぜてはいけないと思ったので、あえてreduxのstoreを使わないでおきました
     */
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

    const createNewPost = async () => {
        // postする
        try {
            const postsPostReponse = await postPosts(postParameters);
            console.log(postsPostReponse);
        } catch (error) {
            console.error(error);
            throw error;
        }
        // 再度スレッドを取得し直す
        // ここのロジックは再度利用しているので、共通化しておきたい
        try {
            const postsGetResponse = await getPosts(getParameters);
            console.log(postsGetResponse);
            setPosts(postsGetResponse);
        } catch (error) {
            console.error(error);
            throw error;
        }
        // newpostをリセット
        setNewPost("");
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

    useEffect(() => {
        setPostParameters({
            ...postParameters,
            body: {
                post: newPost,
            },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newPost]);

    useEffect(() => {
        const exec = async () => {
            try {
                const postsGetResponse = await getPosts(getParameters);
                console.log(postsGetResponse);
                setPosts(postsGetResponse);
            } catch (error) {
                console.error(error);
                throw error;
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        exec();
        // eslint-disable-next-line
    }, [getParameters]);

    return (
        <div className="py-4">
            <div className="container mx-auto p-4">
                <div className="flex gap-4 flex-wrap md:flex-nowrap">
                    <div className="flex flex-col gap-4 w-full md:w-2/3">
                        <p className="p-4 text-2xl font-bold">{posts?.title}</p>
                        {posts?.posts.map((v) => {
                            return <PostCard key={v.id} id={v.id} post={v.post} />;
                        })}
                        <div className="container mx-auto p-4">
                            <div className="flex flex-col gap-8 items-center justify-center">
                                <div className="btn-group">
                                    {offset <= 1 ? (
                                        <div
                                            className="btn btn-disabled"
                                            onClick={handlePrevious}
                                            onKeyDown={handlePrevious}
                                        >
                                            «
                                        </div>
                                    ) : (
                                        <div className="btn" onClick={handlePrevious} onKeyDown={handlePrevious}>
                                            «
                                        </div>
                                    )}
                                    <div className="btn">Page {offset}</div>
                                    {posts && posts.posts.length < 10 ? (
                                        <div className="btn btn-disabled" onClick={handleNext} onKeyDown={handleNext}>
                                            »
                                        </div>
                                    ) : (
                                        <div className="btn" onClick={handleNext} onKeyDown={handleNext}>
                                            »
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {errorsMessage.ErrorCode ? (
                        <></>
                    ) : (
                        <div className="flex flex-col gap-4 w-full md:w-1/3">
                            <p className="p-4 text-2xl font-bold">投稿する</p>
                            <textarea
                                className="textarea textarea-bordered w-full h-48"
                                placeholder="Write comment"
                                value={newPost}
                                onChange={handleChange}
                            />
                            <div
                                className="btn"
                                onClick={() => {
                                    createNewPost();
                                }}
                                onKeyDown={() => {
                                    createNewPost();
                                }}
                            >
                                投稿！
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Posts;
