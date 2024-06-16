export let Delay = (ms:any) => new Promise(res => setTimeout(res, ms));

export const IsExpired = (expiry: number) => {
    return Math.round(Date.now()) > expiry;
}