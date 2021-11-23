import { NextApiRequest, NextApiResponse } from "next"
import noticias from "../../../data/noticias"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(noticias.map(n => n.id))
}

