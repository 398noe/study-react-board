import { post as postType } from "../../../types/posts";

type postCardProps = postType;
export const PostCard: React.FC<postCardProps> = (props: postCardProps) => {
    const { id, post } = props;
    return (
        <div className="w-full border-b-2 flex flex-col border-indigo-500 shadow-md rounded-xl p-4 hover:border-pink-500">
            <div className="title">
                <kbd className="kbd">{id}</kbd>
            </div>
            <div className="post">
                <p className="text-md">{post}</p>
            </div>
            <div className="embed">
                <p>Iframeコンテンツ</p>
            </div>
            <div className="divider m-0" />
            <div className="heat">
                <p>熱量メーター</p>
                <div className="badge badge-outline badge-lg">
                    <span>💕</span>
                    <span>+</span>
                    <span>30</span>
                </div>
            </div>
        </div>
    );
}

export default PostCard;