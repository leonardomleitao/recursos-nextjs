import Janela from "../../../components/Janela";
import Pagina from "../../../components/Pagina";
import Titulo from "../../../components/Titulo";

export default function B() {
    return (
        <Pagina>
            <Titulo inicial="Middleware" final="Página B"
                mesmaLinha menor className="mb-8" />
            <Janela urlDoCodigo="/codigo/midAB" className="w-3/4 lg:w-1/2">
                Essa é a opção B
            </Janela>
        </Pagina>
    )
}