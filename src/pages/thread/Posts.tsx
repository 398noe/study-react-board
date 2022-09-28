import { useState } from "react";
import { postsGetResponse200 } from "../../../types/posts";
import { PostCard } from "../../components/Card/post";
import { postsGetResponse200Data } from "../../toy/posts";
/**
 * 掲示板スレッド内を表示するアプリ
 */
export const Posts = () => {
    const [posts, setPosts] = useState<postsGetResponse200>(postsGetResponse200Data);
    return (
        <div className="py-4">
            <div className="container mx-auto p-4">
                <p className="text-center text-2xl font-bold">Vtuberについて語るスレッド</p>
                <div className="flex flex-col gap-4">
                    {
                        posts.posts.map((v) => {
                            return (
                                <PostCard key={v.id} id={v.id} post={v.post} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Posts;