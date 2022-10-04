/**
 * getTrueOffset
 * @param v offset number
 * @returns Offset value for HTTP Request
 */
export const getTrueOffset = (v: number) => {
    return ((v - 1) * 10).toString();
};
