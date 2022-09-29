import { urlType } from "../../types/url";
// eslint-disable-next-line
export const urlRegExp = new RegExp(/(https?:\/\/[\S]+)/igm);

// eslint-disable-next-line
export const twitterRegExp = new RegExp(/(https?:\/\/twitter.com\/)([A-Za-z0-9_]+)(\/(status|statuses)\/(\d+))?/igm);

// eslint-disable-next-line
export const youtubeRegExp = new RegExp(/(https?:\/\/(www\.)?youtube.com\/watch\?v=([^&]+))/igm);

/**
 * Make URL Array from string
 * @param str 
 * @returns 
 */
export const detectURL = (str: string): Array<string> => {
    const result = str.match(urlRegExp);
    if (result === null) {
        return [];
    }
    return result?.flat();
};

/**
 * Detect Tweet ID and User ID
 * @param str 
 * @returns 
 */
export const detectTweet = (str: string): urlType => {
    // https://twitter.com/rina_runarina
    // -> ["", "https://twitter.com/", "rina_runarina", undefined, undefined, undefined, ""]
    // https://twitter.com/rina_runarina/status/1536325209627582464
    // -> ["", "https://twitter.com/", "rina_runarina", "/status/1536325209627582464", "status", "1536325209627582464", ""]
    const result = str.split(twitterRegExp);
    if (result == null) {
        return {
            url: "",
            type: "none"
        };
    }

    // ユーザーリンクの場合result[4]はundefinedになる
    if (result[2] !== undefined && result[5] !== undefined) {
        return {
            url: result[5],
            type: "tweetId"
        };
    }
    if (result[2] !== undefined) {
        return {
            url: result[2],
            type: "userId"
        };
    }
    return {
        url: "",
        type: "none"
    };
}

/**
 * Detect YouTube Video Id
 */
export const detectYouTube = (str: string): urlType => {
    // https://www.youtube.com/watch?v=zjcuy37uoRM
    // -> ["", "https://www.youtube.com/watch?v=zjcuy37uoRM", "www.", "zjcuy37uoRM", ""]
    const result = str.split(youtubeRegExp);
    
    if (result === null) {
        return {
            url: "",
            type: "none"
        };
    }
    
    // array[3]がVideoIdになっている
    if (result[3] !== undefined) {
        return {
            url: result[3],
            type: "videoId"
        }
    }

    return {
        url: "",
        type: "none"
    }
}