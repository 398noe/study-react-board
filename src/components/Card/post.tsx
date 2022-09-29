import { useEffect, useState } from "react";
import reactStringReplace from "react-string-replace";
import { FaFireAlt } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { post as postType } from "../../../types/posts";
import { detectTweet, detectURL, detectYouTube, urlRegExp } from "../../utils/url";
import Twitter from "../Embed/Twitter"; // default宣言しているのでTwitterでも通るけど、宣言先のTWEmbedにするべきかどうか
import YouTube from "../Embed/YouTube";
import { urlType } from "../../../types/url";

type postCardProps = postType;
export const PostCard: React.FC<postCardProps> = (props: postCardProps) => {
    const { post } = props;

    const [url, setUrl] = useState<string[]>([]);
    const [emoji, setEmoji] = useState<string[]>([]);
    const [tweets, setTweets] = useState<string[]>([]);
    const [timeline, setTimeline] = useState<string[]>([]);
    const [youTube, setYouTube] = useState<string[]>([]);

    /**
     * post -> url -> url to tweets and timeline -> url to youtube
     */
    useEffect(() => {
        /**
         * 投稿からURLを取得
         */
        const postToUrl = (text: string) => {
            const newUrl = detectURL(text);
            setUrl([...url, ...newUrl]);
        }
        // URLの配列を取得
        postToUrl(post);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        /**
         * TwitterのURLからユーザー情報とアカウント情報を取得
         */
        const urlToTwitter = (urls: Array<string>) => {
            urls.forEach((v) => {
                const newTweet: urlType = detectTweet(v);
                if (newTweet.type === "tweetId") {
                    setTweets([...tweets, newTweet.url]);
                }
                if (newTweet.type === "userId") {
                    setTimeline([...timeline, newTweet.url]);
                }
            });
        }
        /**
         * YouTubeのURLからビデオ情報を取得
         */
        const urlToYouTube = (urls: Array<string>) => {
            urls.forEach((v) => {
                const newYouTube: urlType = detectYouTube(v);
                if (newYouTube.type === "videoId") {
                    setYouTube([...youTube, newYouTube.url]);
                }
            })
        }
        // twitterとyoutubeを取得
        const urls = ["https://twitter.com/rina_runarina/status/1536325209627582464", "https://twitter.com/rina_runarina", "https://www.youtube.com/watch?v=0z-RVrK2Rg8"];
        urlToTwitter(urls);
        urlToYouTube(urls);
        // eslint-disable-next-line
    }, [url]);
    return (
        <div className="w-full border-4 border-b-indigo-500 shadow-md rounded-xl p-4 hover:border-rose-600">
            <div className="post">
                {
                    post.split("\n").map((v) => {
                        // 更にURLが検出されたらアンカーリンクにする
                        return (
                            <p className="text-lg font-bold break-all" key={v}>
                                {
                                    reactStringReplace(v, urlRegExp, (match) => {
                                        return (
                                            <a href={match} className="link-primary" target="_blank" rel="noreferrer" key={match}>{match}</a>
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
                    /*
                    tweets.map((v) => {
                        return (
                            <Twitter tweetId={v} key={v} />
                        )
                    })
                    */
                }
            </div>
            <div className="embed flex flex-wrap gap-4 justify-center justify-items-center">
                {
                    /*
                    youTube.map((v) => {
                        return (
                            <YouTube videoId={v} key={v} />
                        )
                    })
                    */
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