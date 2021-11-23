import PaginaExemplo from "../../../components/PaginaExemplo"

export default function A() {
    return (
        <PaginaExemplo titulo={['Middleware', 'Página A']}
            urlDoCodigo="/codigo/midAB">
            <div>Essa é a opção A</div>
        </PaginaExemplo>
    )
}