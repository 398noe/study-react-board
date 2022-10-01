/**
 * @file url.ts
 * @author 398noe
 * @description detection tools of urls
 */
import { urlType } from "../../types/url";
import { urlRegExp, twitterRegExp, youtubeRegExp } from "./regExp";

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
 * Get tweets from string
 * @param str 
 * @returns
 * @example https://twitter.com/rina_runarina -> ["", "https://twitter.com/", "rina_runarina", undefined, undefined, undefined, ""]
 * @example https://twitter.com/rina_runarina/status/1536325209627582464 -> ["", "https://twitter.com/", "rina_runarina", "/status/1536325209627582464", "status", "1536325209627582464", ""]
 */
export const detectTweet = (str: string): urlType => {
    const result = str.split(twitterRegExp);
    if (result == null) {
        return {
            url: "",
            type: "none"
        };
    }

    // ユーザーリンクの場合result[5]はundefinedになる
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
 * Get video id from youtube urls
 * @param str youtube url
 * @returns @type urlType
 * @example https://www.youtube.com/watch?v=zjcuy37uoRM -> ["", "https://www.youtube.com/watch?v=zjcuy37uoRM", "www.", "zjcuy37uoRM", ""]
 */
export const detectYouTube = (str: string): urlType => {
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