export const ssg1 = `
import PaginaExemplo from '../../components/PaginaExemplo'

export default function SSG1() {
    return (
        <PaginaExemplo titulo={['SSG', 'sem Dados']} urlDoCodigo="/codigo/ssg1">
            <div>Conteúdo Estático Simples</div>
        </PaginaExemplo>
    )
}`

export const ssg2 = `
import PaginaExemplo from '../../components/PaginaExemplo'
import Http from '../../utils/http'
import { formatarDataHora } from '../../utils/data'

export async function getStaticProps() {
    const nomes = await Http.get('/api/nomes')

    return {
        props: {
            geradoEm: formatarDataHora(new Date),
            nomes
        },
        revalidate: 60,
    }
}

export default function SSG2(props) {

    function renderizarNomes() {
        return props.nomes?.map((nome: string, i: number) => {
            return <li key={i}>{nome}</li>
        })
    }

    return (
        <PaginaExemplo titulo={['SSG', 'com Dados']} urlDoCodigo="/codigo/ssg2">
            <div>
                Gerado em:
                <span className="font-bold"> {props.geradoEm}</span>
            </div>
            <ul className="list-disc ml-10 mt-5">
                {renderizarNomes()}
            </ul>
        </PaginaExemplo>
    )
}`

export const ssr = `
import PaginaExemplo from '../../components/PaginaExemplo'
import Http from '../../utils/http'
import { formatarDataHora } from '../../utils/data'
import { Pedido, PedidoItem } from '../../core/Pedido'

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
                <tr key={pedido.id} className={\`\${i === 0 ? 'bg-gray-900' : 'bg-black'}\`}>
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
        <PaginaExemplo titulo={['Server-Side', 'Rendering']} urlDoCodigo="/codigo/ssr">
            <div>Gerado em: <span className="font-bold">{props.geradoEm}</span></div>
            <div className="w-full flex justify-center">
                <table className="w-full rounded-lg overflow-hidden mt-5">
                    <thead>
                        <tr className="bg-gray-700 rounded-tl-lg rounded-tr-lg">
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
        </PaginaExemplo>
    )
}`

export const ssgcsr = `
import { useEffect, useState } from 'react'
import PaginaExemplo from '../../components/PaginaExemplo'
import Http from '../../utils/http'
import { formatarDataHora } from '../../utils/data'
import { Pedido, PedidoItem } from '../../core/Pedido'

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
                <tr key={pedido.id} className={\`\${i === 0 ? 'bg-gray-900' : 'bg-black'}\`}>
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
        <PaginaExemplo titulo={['Integrando', 'SSG & CSR']} urlDoCodigo="/codigo/ssgcsr">
            <div>Gerado em: <span className="font-bold">{props.geradoEm}</span></div>
            <div className="w-full flex justify-center">
                <table className="w-full rounded-lg overflow-hidden mt-5">
                    <thead>
                        <tr className="bg-gray-700 rounded-tl-lg rounded-tr-lg">
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
        </PaginaExemplo>
    )
}`

export const codigo = `
import ExibirCodigo from '../../components/ExibirCodigo'
import Janela from '../../components/Janela'
import Pagina from '../../components/Pagina'
import exemplos from '../../data/exemplos'

export function getStaticPaths() {
    const paths = Object.keys(exemplos).map(nomeExemplo => {
        return { params: { nomeExemplo } }
    })
    return { paths, fallback: false }
}

export function getStaticProps({ params }) {
    const { nomeExemplo } = params
    return {
        props: { nomeExemplo }
    }
}

export default function CodigoDoExemplo(props) {
    const exemplo = exemplos[props.nomeExemplo]
    return exemplo ? (
        <Pagina>
            <Janela
                titulo={\`Código do exemplo: \${props.nomeExemplo}\`}
                urlDoCodigo="/codigo/codigo"
                urlVoltar={exemplo.voltarPara ? exemplo.voltarPara : '/'}
            >
                <ExibirCodigo exemplo={exemplo} />
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
interface ExibirCodigoProps {
    exemplo: any
}

export default function ExibirCodigo(props: ExibirCodigoProps) {
    const linguagem = linguagens[props.exemplo.linguagem] ?? linguagens.javascript
    const html = Prism.highlight(
        props.exemplo.codigo?.trim(),
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