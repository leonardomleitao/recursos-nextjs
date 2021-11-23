import React, { Suspense } from "react"
import PaginaExemplo from "../../components/PaginaExemplo"
import Processando from "../../components/Processando"

export default function Noticias() {
    const Noticias = React.lazy(() => import('../../components/Noticias.server'))

    return (
        <PaginaExemplo titulo={['Server', 'Component']}
            urlDoCodigo="/codigo/serverComponent">
            <Suspense fallback={<Processando />}>
                <Noticias />
            </Suspense>
        </PaginaExemplo>
    )
}