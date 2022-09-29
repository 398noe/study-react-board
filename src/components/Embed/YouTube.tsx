interface YouTubeProps {
    videoId: string;
}

export const YouTube = (props: YouTubeProps): JSX.Element => {
    const { videoId } = props;
    return (
        <iframe className="w-full max-w-md aspect-video" title="YouTube Embed" src={`https://www.youtube-nocookie.com/embed/${videoId}`} />
    );
}

export default YouTube;