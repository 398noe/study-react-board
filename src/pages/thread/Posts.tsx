import React, { useState } from "react";
import { postsGetResponse200 } from "../../../types/posts";
import { PostCard } from "../../components/Card/post";
import { postsGetResponse200Data } from "../../toy/posts";
/**
 * 掲示板スレッド内を表示するアプリ
 */
export const Posts = () => {
    const [posts, setPosts] = useState<postsGetResponse200>(postsGetResponse200Data);

    // 新規投稿する文章
    const [newPost, setNewPost] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewPost(e.target.value);
    } 
    return (
        <div className="py-4">
            <div className="container mx-auto p-4">
                <div className="flex gap-4 flex-wrap md:flex-nowrap">
                    <div className="flex flex-col gap-4 w-full md:w-2/3">
                        <p className="p-4 text-2xl font-bold">Vtuberについて語るスレッド</p>
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