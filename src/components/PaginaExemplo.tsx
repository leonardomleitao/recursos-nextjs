import Janela from "./Janela"
import Pagina from "./Pagina"
import Titulo from "./Titulo"

interface PaginaExemploProps {
    titulo?: string[]
    urlDoCodigo?: string
    children: any
}

export default function PaginaExemplo(props: PaginaExemploProps) {
    return (
        <Pagina>
            <Titulo inicial={props.titulo?.[0]} final={props.titulo?.[1]}
                mesmaLinha menor animar className="mb-8" />
            <Janela urlDoCodigo={props.urlDoCodigo} className="w-3/4 lg:w-1/2">
                {props.children}
            </Janela>
        </Pagina>
    )
}
