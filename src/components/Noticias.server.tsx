import { Suspense, useEffect, useState } from "react"
import { obterDados } from "../utils/suspense"
import Processando from "./Processando"

export function Noticia(props) {
    const [noticiaReq, setNoticiaReq] = useState<any>()
    useEffect(() => {
        setNoticiaReq(obterDados(`/api/noticias/${props.id}`))
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
}