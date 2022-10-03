import { emojiMeter } from "../types/emoji";
import { emojiRegExp } from "./regExp";

/**
 * Get emoji from text
 * @param str text
 * @returns emoji array
 */
export const detectEmoji = (str: string): Array<string> => {
    const result = str.match(emojiRegExp);
    if (result === null) {
        return [];
    }

    return result?.flat();
}

/**
 * Convert emoji array to emoji objects
 * @param arr emoji array
 * @returns emojiMeter
 */
export const emojiToMeter = (arr: Array<string>): emojiMeter => {
    const reshape: emojiMeter = {};
    for (let i = 0; i < arr.length; i += 1) {
        const element = arr[i];
        reshape[element] = reshape[element] ? reshape[element] + 1 : 1;
    }

    return reshape;
}
