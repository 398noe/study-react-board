/**
 * 重複した要素を配列から消す
 * @param array Input Array
 * @returns remove duplicated from array
 */
export const removeDuplicateArray = (array: Array<string>): Array<string> => {
    return Array.from(new Set(array));
};
