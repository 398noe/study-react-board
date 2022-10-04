/**
 * @file emoji.ts
 * @author 398noe
 * @description Utils for emoji
 */
import { emojiMeter } from "../types/emoji";
import { emojiRegExp } from "./regExp";

/**
 * Get emoji Array from text
 * @param  {string} str text
 * @returns Array
 */
export const detectEmoji = (str: string): Array<string> => {
    const result = str.match(emojiRegExp);
    if (result === null) {
        return [];
    }

    return result?.flat();
};

/**
 * Convert emoji array to emoji meter object
 * @param  {Array<string>} arr emoji Array
 * @returns {emojiMeter} emoji Meter
 */
export const emojiToMeter = (arr: Array<string>): emojiMeter => {
    const reshape: emojiMeter = {};
    for (let i = 0; i < arr.length; i += 1) {
        const element = arr[i];
        reshape[element] = reshape[element] ? reshape[element] + 1 : 1;
    }

    return reshape;
};
