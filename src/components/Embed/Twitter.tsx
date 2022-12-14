import { TwitterTweetEmbed } from "react-twitter-embed";

interface TwitterProps {
    tweetId: string;
}

export const Twitter: React.FC<TwitterProps> = (props: TwitterProps) => {
    const { tweetId } = props;
    return (
        <div className="w-full max-w-xs">
            <TwitterTweetEmbed tweetId={tweetId} />
        </div>
    );
};

export default Twitter;
