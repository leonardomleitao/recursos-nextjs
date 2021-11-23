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

export const urlImport = `
import Janela from "../../components/Janela"
import Pagina from "../../components/Pagina"
import confetti from 'https://cdn.skypack.dev/canvas-confetti'

export default function UrlImport() {

    return (
        <Pagina>
            <Janela titulo="Url Import">
                <div className="flex justify-center py-5">
                    <button
                        onClick={() => confetti()}
                        className={\`
                            bg-gradient-to-r from-pink-600 to-yellow-600
                            p-3 rounded-md
                        \`}
                    >
                        É Ritmo de Festa!
                    </button>
                </div>
            </Janela>
        </Pagina>
    )
}

//
// next.config.js
//

module.exports = {
    reactStrictMode: true,
    experimental: {
        concurrentFeatures: true,
        serverComponents: true,
        urlImports: ['https://cdn.skypack.dev'],
    }
}`

export const midSimples = `
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    const random = Math.random()

    if(random < 0.4) {
        return NextResponse.next()
    } else if(random < 0.8) {
        return NextResponse.rewrite('/codigo/midSimples')
    } else {
        return new Response('Exemplo de middleware!')
    }
}`

export const midAB = `
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

const NOME_COOKIE = 'modelo-pagina-checkout'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    const opcao = req.cookies[NOME_COOKIE] || (Math.random() > 0.5 ? 'a' : 'b')
    const res = NextResponse.rewrite(\`/mid/ab/\${opcao}\`)

    if (!req.cookies[NOME_COOKIE]) {
        res.cookie(NOME_COOKIE, opcao)
    }
    return res
}`

export const serverComponent = `
import React, { Suspense } from "react"
import Janela from "../../components/Janela"
import Pagina from "../../components/Pagina"
import Processando from "../../components/Processando"
import Titulo from "../../components/Titulo"

export default function ServerComponent() {
    const Noticias = React.lazy(() => import('../../components/Noticias.server'))

    return (
        <Pagina>
            <Titulo inicial="Server" final="Component"
                mesmaLinha menor className="mb-8" />
            <Janela className="w-3/4 lg:w-1/2">
                <Suspense fallback={<Processando />}>
                    <Noticias />
                </Suspense>
            </Janela>
        </Pagina>
    )
}

//
// Noticias.server.tsx
//

import { Suspense, useEffect, useState } from "react"
import { obterDados } from "../utils/suspense"
import Processando from "./Processando"

export function Noticia(props) {
    const [noticiaReq, setNoticiaReq] = useState<any>()
    useEffect(() => {
        setNoticiaReq(obterDados(\`/api/noticias/\${props.id}\`))
    }, [])

    const noticia = noticiaReq?.resultado()
    return (
        <div key={noticia?.id} className="mb-3">
            <div className="text-2xl font-bold">{noticia?.titulo}</div>
            <div className="text-sm text-gray-400">{noticia?.descricao}</div>
            <div className="text-sm">Fonte: {noticia?.fonte}</div>
        </div>
    )
}

export default function Noticias(props) {
    const [idsReq, setIdsReq] = useState<any>()

    useEffect(() => {
        setIdsReq(obterDados('/api/noticias'))
    }, [])

    const ids = idsReq?.resultado()

    return (
        <div className="p-5">
            {ids?.map((id) => {
                return (
                    <div key={id}>
                        <Suspense fallback={<Processando />}>
                            <Noticia id={id} />
                        </Suspense>
                    </div>
                )
            })}
        </div>
    )
}`