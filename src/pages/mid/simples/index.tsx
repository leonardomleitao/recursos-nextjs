import Janela from "../../../components/Janela";
import Pagina from "../../../components/Pagina";
import Titulo from "../../../components/Titulo";

export default function Simples() {
    return (
        <Pagina>
            <Titulo inicial="Middleware" final="Simples"
                mesmaLinha menor className="mb-8" />
            <Janela urlDoCodigo="/codigo/midSimples" className="w-3/4 lg:w-1/2">
                Middleware Simples
            </Janela>
        </Pagina>
    )
}