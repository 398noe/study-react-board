/**
 * @file regExp.ts
 * @author 398noe
 * @description regExps for board application
 */

// eslint-disable-next-line
export const urlRegExp = new RegExp(/(https?:\/\/[\S]+)/gim);

// eslint-disable-next-line
export const twitterRegExp = new RegExp(/(https?:\/\/twitter.com\/)([A-Za-z0-9_]+)(\/(status|statuses)\/(\d+))?/gim);

// eslint-disable-next-line
export const youtubeRegExp = new RegExp(/(https?:\/\/(www\.)?youtube.com\/watch\?v=([^&]+))/gim);

// eslint-disable-next-line
export const emojiRegExp = new RegExp(/\p{Emoji_Presentation}/gu);
