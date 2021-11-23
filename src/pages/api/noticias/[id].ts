import { NextApiRequest, NextApiResponse } from "next"
import noticias from "../../../data/noticias"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await esperarEntre(1000, 4000)
    const noticia = noticias.filter(n => n.id === req.query.id)
    res.status(200).json(noticia.length ? noticia[0] : {})
}

function esperarEntre(min, max): Promise<any> {
    return new Promise((resolve: any) => {        
        const tempo = Math.round(Math.random() * (max - min)) + min
        setTimeout(() => resolve(), tempo)
    })
}

