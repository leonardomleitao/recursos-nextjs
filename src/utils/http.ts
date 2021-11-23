const URL_BASE = process.env.NEXT_PUBLIC_BASE_URL

export default class Http {
    static async get(url: string): Promise<any> {
        if (!url) return null
    
        const urlFinal = url.startsWith('http') ? url : `${URL_BASE}${url}`
        const resp = await fetch(urlFinal)
        return await resp.json()
    }
}