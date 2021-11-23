import React, { Suspense } from "react"
import Janela from "../../components/Janela"
import Pagina from "../../components/Pagina"
import Processando from "../../components/Processando"

export default function Concorrente() {
    const Noticias = React.lazy(() => import('../../components/Noticias.server'))

    return (
        <Pagina>
            <Janela titulo="Server Component">
                <Suspense fallback={<Processando />}>
                    <Noticias />
                </Suspense>
            </Janela>
        </Pagina>
    )
}