/* eslint-disable no-console */
const isDev = process.env.NODE_ENV === 'development';

export function log (message, ...optionalParams) {
    if (isDev) {
        console.log(message, ...optionalParams);
    }
}
