import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postsGetParameters, postsGetResponse200 } from "../../types/posts";
import { PostCard } from "../../components/Card/post";
import { postsGetResponse200Data } from "../../toy/posts";
import { getPosts } from "../../actions/posts/getPosts";

/**
 * 掲示板スレッド内を表示するアプリ
 */
export const Posts = () => {
    const [posts, setPosts] = useState<postsGetResponse200>(postsGetResponse200Data);

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
                        <p className="p-4 text-2xl font-bold">{posts.title}</p>
                        {
                            posts.posts.map((v) => {
                                return (
                                    <PostCard key={v.id} id={v.id} post={v.post} />
                                );
                            })
                        }
                    </div>
                    <div className="flex flex-col gap-4 w-full md:w-1/3">
                        <p className="p-4 text-2xl font-bold">投稿する</p>
                        <textarea className="textarea textarea-bordered w-full h-48" placeholder="Write comment" value={newPost} onChange={handleChange}/>
                        <div className="btn">投稿！</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;