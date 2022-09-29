import YouTube, { YouTubeProps } from "react-youtube"; // この書き方余計なものまでimportするから重たいんよな…

interface YTEmbedProps extends YouTubeProps {
    videoId: string;
}

export const YTEmbed = (props: YTEmbedProps): JSX.Element => {
    const { videoId } = props;
    return (
        <YouTube videoId={videoId} />
    );
}

export default YTEmbed;