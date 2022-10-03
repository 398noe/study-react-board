import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postsGetParameters, postsGetResponse200 } from "../../types/posts";
import { PostCard } from "../../components/Card/post";
import { getPosts } from "../../actions/posts/getPosts";
import { useSelector } from "../../store/store";
import { errors } from "../../store/errors";

/**
 * 掲示板スレッド内を表示するアプリ
 */
export const Posts = () => {
    const errorsMessage = useSelector(errors);
    // 投稿記事
    const [posts, setPosts] = useState<postsGetResponse200>();

    // 新規投稿する文章
    const [newPost, setNewPost] = useState<string>("");

    const { threadId } = useParams();

    const [getParameters, setGetParameters] = useState<postsGetParameters>({
        path: {
            // react-routerから取得したthreadIdを充てる
            threadId: threadId ?? "0"
        },
        query: {
            offset: "1"
        },
        body: {}
    })


    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewPost(e.target.value);
    }

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
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        exec();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="py-4">
            <div className="container mx-auto p-4">
                <div className="flex gap-4 flex-wrap md:flex-nowrap">
                    <div className="flex flex-col gap-4 w-full md:w-2/3">
                        <p className="p-4 text-2xl font-bold">{posts?.title}</p>
                        {
                            posts?.posts.map((v) => {
                                return (
                                    <PostCard key={v.id} id={v.id} post={v.post} />
                                );
                            })
                        }
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
                    {
                        errorsMessage.ErrorCode ?
                            (
                                // eslint-disable-next-line react/jsx-no-useless-fragment
                                <></>
                            )
                            : (
                                <div className="flex flex-col gap-4 w-full md:w-1/3">
                                    <p className="p-4 text-2xl font-bold">投稿する</p>
                                    <textarea className="textarea textarea-bordered w-full h-48" placeholder="Write comment" value={newPost} onChange={handleChange} />
                                    <div className="btn">投稿！</div>
                                </div>
                            )
                    }

                </div>
            </div >
        </div >
    );
}

export default Posts;