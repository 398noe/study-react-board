const urlRegExp = new RegExp(/(https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+)/g);

export const detectURL = (str: string): Array<string> | undefined => {
    const result =  str.match(urlRegExp);
    return result?.flat();
};
