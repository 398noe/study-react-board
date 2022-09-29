import { useEffect, useState } from "react";
import reactStringReplace from "react-string-replace";
import { FaFireAlt } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { post as postType } from "../../../types/posts";
import { urlRegExp } from "../../utils/url";
import Twitter from "../Embed/Twitter"; // default宣言しているのでTwitterでも通るけど、宣言先のTWEmbedにするべきかどうか
import YouTube from "../Embed/YouTube";

type postCardProps = postType;
export const PostCard: React.FC<postCardProps> = (props: postCardProps) => {
    const { id, post } = props;

    const [emoji, setEmoji] = useState<string[]>();
    const [tweets, setTweets] = useState<string[]>(["1536325209627582464", "1300805849607073797"]);
    const [youTube, setYouTube] = useState<string[]>(["2SciSwfRz2E","zjcuy37uoRM"]);
    const [showPost, setShowPost] = useState<string[]>();

    return (
        <div className="w-full border-4 border-b-indigo-500 shadow-md rounded-xl p-4 hover:border-rose-600">
            <div className="post">
                {
                    post.split("\n").map((v) => {
                        // 更にURLが検出されたらアンカーリンクにする
                        return (
                            <p className="text-lg font-bold break-all" key={v}>
                                {
                                    reactStringReplace(v, urlRegExp, (match, i) => {
                                        return (
                                            <a href={match} className="link-primary">{match}</a>
                                        )
                                    })
                                }
                            </p>
                        )
                    })
                }
            </div>
            <div className="embed flex flex-wrap gap-4 justify-center justify-items-center">
                {
                    tweets.map((v) => {
                        return (
                            <Twitter tweetId={v} />
                        )
                    })
                }
            </div>
            <div className="embed flex flex-wrap gap-4 justify-center justify-items-center">
                {
                    youTube.map((v) => {
                        return (
                            <YouTube videoId={v} />
                        )
                    })
                }
            </div>
            <div className="divider m-0" />
            <div className="heat">
                <div className="flex items-center gap-x-2 pb-4">
                    <p className="font-bold">熱量メーター</p>
                    <span><FaFireAlt className="text-rose-600" /></span>
                </div>
                <div className="badge badge-outline badge-lg">
                    <span>💕</span>
                    <span><FiPlus /></span>
                    <span>30</span>
                </div>
            </div>
        </div>
    );
}

export default PostCard;