export async function nuiAction<T = any>(resourceName = "arp-phone", eventName: string, data?: any): Promise<T> {
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
    };

    const resp = await fetch(`https://${resourceName}/${eventName}`, options);

    const respFormatted = await resp.json()

    return respFormatted
}
