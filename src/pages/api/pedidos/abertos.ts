import { NextApiRequest, NextApiResponse } from "next"
import { Pedido } from "../../../core/Pedido"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(pedidos)
}

const pedidos: Pedido[] = [{
    id: '20220319082055',
    clienteId: '123',
    clienteNome: 'Pedro Henrique',
    data: new Date,
    itens: [{
        itemId: '5506',
        itemNome: 'Combo Família 25% off',
        qtde: 1,
    }, {
        itemId: '108',
        itemNome: 'Coca-cola Zero',
        qtde: 2,
    }],
}, {
    id: '20220319082140',
    clienteId: '8712',
    clienteNome: 'Ana Julia',
    data: new Date,
    itens: [{
        itemId: '5492',
        itemNome: 'Burger Onions',
        qtde: 3,
    }, {
        itemId: '5477',
        itemNome: 'Batata Frita Média',
        qtde: 2,
    }],
}]
