export interface PedidoItem {
    itemId: string
    itemNome: string
    qtde: number
}

export interface Pedido {
    id: string
    clienteId: string
    clienteNome: string
    data: Date
    itens: PedidoItem[]
}