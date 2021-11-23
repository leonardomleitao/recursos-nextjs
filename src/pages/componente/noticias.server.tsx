import React, { Suspense } from "react"
import Janela from "../../components/Janela"
import Pagina from "../../components/Pagina"
import Processando from "../../components/Processando"
import Titulo from "../../components/Titulo"

export default function Noticias() {
    const Noticias = React.lazy(() => import('../../components/Noticias.server'))

    return (
        <Pagina>
            <Titulo inicial="Server" final="Component"
                mesmaLinha menor className="mb-8" />
            <Janela urlDoCodigo="/codigo/serverComponent" className="w-3/4 lg:w-1/2">
                <Suspense fallback={<Processando />}>
                    <Noticias />
                </Suspense>
            </Janela>
        </Pagina>
    )
}