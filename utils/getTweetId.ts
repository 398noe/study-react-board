export const getTweetId = (url: string) => {
    const splitter = url.split("/");
    console.log(splitter);
}

export const getTweetURL = (url: string) => {
    const tweetURL = url.match("(http|https):\/\/(twitter.com)\/([A-Za-z0-9_]*)\/(status|statues)\/[0-9]*");
    return tweetURL;
}