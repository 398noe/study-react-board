// eslint-disable-next-line
export const urlRegExp = new RegExp(/(https?:\/\/[\S]+)/igm);

/**
 * Make URL Array from string
 * @param str 
 * @returns 
 */
export const detectURL = (str: string): Array<string> | undefined => {
    const result =  str.match(urlRegExp);
    return result?.flat();
};
