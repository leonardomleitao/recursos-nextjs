import PaginaExemplo from "../../../components/PaginaExemplo"

export default function B() {
    return (
        <PaginaExemplo titulo={['Middleware', 'Página B']}
            urlDoCodigo="/codigo/midAB">
            <div>Essa é a opção B</div>
        </PaginaExemplo>
    )
}