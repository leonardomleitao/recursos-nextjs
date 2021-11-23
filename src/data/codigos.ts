export const ssg1 = `
import Janela from '../../components/Janela'
import Pagina from '../../components/Pagina'

export default function SSG1() {
    return (
        <Pagina>
            <Janela titulo="Static Site Generation">
                <div>Conteúdo Estático Simples</div>
            </Janela>
        </Pagina>
    )
}`

export const ssg2 = `
import Janela from '../../components/Janela'
import Pagina from '../../components/Pagina'
import { formatarDataHora } from '../../utils/data'
import Http from '../../utils/http'

export async function getStaticProps() {
    const nomes = await Http.get('/api/nomes')

    return {
        props: {
            geradoEm: formatarDataHora(new Date),
            nomes
        },
        revalidate: 60, // em segundos
    }
}

export default function SSG2(props) {

    function renderizarNomes() {
        return props.nomes?.map((el, i) => {
            return <li key={i}>{el}</li>
        })
    }

    return (
        <Pagina>
            <Janela titulo="Static Site Generation com Dados">
                <div>Gerado em: <span className="font-bold">{props.geradoEm}</span></div>
                <ul className="list-disc ml-5 mt-5">
                    {renderizarNomes()}
                </ul>
            </Janela>
        </Pagina>
    )
}`

export const ssr = `
import Janela from '../../components/Janela'
import Pagina from '../../components/Pagina'
import { Pedido, PedidoItem } from '../../core/Pedido'
import { formatarDataHora } from '../../utils/data'
import Http from '../../utils/http'

export async function getServerSideProps() {
    const pedidos: Pedido[] = await Http.get('/api/pedidos/abertos')

    return {
        props: {
            geradoEm: formatarDataHora(new Date),
            pedidos,
        }
    }
}

export default function SSR(props) {
    const itemParaTexto = (i: PedidoItem) => \`\${i.itemNome} (\${i.qtde})\`

    function renderizarPedidos() {
        const pedidos: Pedido[] = props.pedidos
        return pedidos?.map((pedido, i) => {
            return (
                <tr key={pedido.id} className={\`\${i === 0 ? 'bg-gray-800' : 'bg-gray-700'}\`}>
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
            <Janela titulo="Server-Side Rendering">
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
}`

export const ssgcsr = `
import { useEffect, useState } from 'react'
import Janela from '../../components/Janela'
import Pagina from '../../components/Pagina'
import { Pedido, PedidoItem } from '../../core/Pedido'
import { formatarDataHora } from '../../utils/data'
import Http from '../../utils/http'

export function getStaticProps() {
    return {
        props: {
            geradoEm: formatarDataHora(new Date),
        },
    }
}

export default function SSGCSR(props) {
    const [pedidos, setPedidos] = useState<Pedido[]>()

    useEffect(() => {
        Http.get('/api/pedidos/abertos').then(setPedidos)
    }, [])

    const itemParaTexto = (i: PedidoItem) => \`\${i.itemNome} (\${i.qtde})\`

    function renderizarPedidos() {
        return pedidos?.map((pedido, i) => {
            return (
                <tr key={pedido.id} className={\`\${i === 0 ? 'bg-gray-800' : 'bg-gray-700'}\`}>
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
            <Janela titulo="Client-Side Rendering">
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
}`

export const codigo = `
import ExibirCodigo from '../../components/ExibirCodigo'
import Janela from '../../components/Janela'
import Pagina from '../../components/Pagina'
import exemplos from '../../data/exemplos'

export function getStaticPaths() {
    const paths = Object.keys(exemplos).map(exemplo => {
        return { params: { exemplo } }
    })
    return { paths, fallback: false }
}

export function getStaticProps({ params }) {
    const { exemplo } = params
    return {
        props: { exemplo }
    }
}

export default function CodigoDoExemplo(props) {
    return props.exemplo ? (
        <Pagina>
            <Janela
                titulo={\`Código do exemplo: \${props.exemplo}\`}
                urlDoCodigo="/codigo/codigo"
                largura="w-3/4"
            >
                <ExibirCodigo exemplo={props.exemplo} />
            </Janela>
        </Pagina>
    ) : null
}

// 
// components > ExibirCodigo.tsx
// 

import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

import linguagens from '../data/linguagens'
import exemplos from '../data/exemplos'

interface ExibirCodigoProps {
    exemplo: string
}

export default function ExibirCodigo(props: ExibirCodigoProps) {
    const exemplo = exemplos[props.exemplo]
    const linguagem = linguagens[exemplo.linguagem] ?? linguagens.javascript
    const html = Prism.highlight(
        exemplo.codigo?.trim(),
        linguagem.constante,
        linguagem.id
    )

    return (
        <pre>
            <code className="font-mono text-2xl">
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
            </code>
        </pre>
    )
}`