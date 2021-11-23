import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(nomes)
}

const nomes: string[] = [
  'Ana',
  'Bia',
  'Carlos',
  'Daniel',
  'Erico',
  'Fagner',
]
