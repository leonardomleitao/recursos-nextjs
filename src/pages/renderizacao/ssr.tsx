import Janela from '../../components/Janela'
import Pagina from '../../components/Pagina'
import { Pedido, PedidoItem } from '../../core/Pedido'
import { formatarDataHora } from '../../utils/data'
import Http from '../../utils/http'

export async function getServerSideProps() {
    const pedidos: Pedido[] = [] // await Http.get('/api/pedidos/abertos')

    return {
        props: {
            geradoEm: formatarDataHora(new Date),
            pedidos,
        }
    }
}

export default function SSR(props) {
    const itemParaTexto = (i: PedidoItem) => `${i.itemNome} (${i.qtde})`

    function renderizarPedidos() {
        const pedidos: Pedido[] = props.pedidos
        return pedidos?.map((pedido, i) => {
            return (
                <tr key={pedido.id} className={`${i === 0 ? 'bg-gray-800' : 'bg-gray-700'}`}>
                    <td className="p-3">
                        {pedido.clienteNome}
                    </td>
                    <td className="p-3">
                        {formatarDataHora(pedido.data)}
                    </td>
                    <td className="p-3">
                        {pedido.itens.map(itemParaTexto).join(';')}
                    </td>
                </tr>
            )
        }) ?? []
    }

    return (
        <Pagina>
            <Janela titulo="Server-Side Rendering" urlDoCodigo="/codigo/ssr">
                <div>Gerado em: <span className="font-bold">{props.geradoEm}</span></div>
                <div className="w-full flex justify-center">
                    <table className="w-full rounded-lg overflow-hidden mt-5">
                        <thead>
                            <tr className="bg-gray-500 rounded-tl-lg rounded-tr-lg">
                                <th className="py-2">Cliente</th>
                                <th className="py-2">Data</th>
                                <th className="py-2">Itens</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderizarPedidos()}
                        </tbody>
                    </table>
                </div>
            </Janela>
        </Pagina>
    )
}
