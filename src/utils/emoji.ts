import { emojiMeter } from "../../types/emoji";
// eslint-disable-next-line
export const emojiRegExp = new RegExp(/\p{Emoji_Presentation}/gu);

export const detectEmoji = (str: string) => {
    const result = str.match(emojiRegExp);
    if (result === null) {
        return [];
    }
    return result?.flat();
}

export const emojiToMeter = (arr: Array<string>): emojiMeter => {
    const reshape: emojiMeter = {};
    for (let i = 0; i < arr.length; i += 1) {
        const element = arr[i];
        reshape[element] = reshape[element] ? reshape[element] + 1 : 1;
    }
    return reshape;
}
