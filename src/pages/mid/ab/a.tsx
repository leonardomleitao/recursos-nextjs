import Janela from "../../../components/Janela";
import Pagina from "../../../components/Pagina";
import Titulo from "../../../components/Titulo";

export default function A() {
    return (
        <Pagina>
            <Titulo inicial="Middleware" final="Página A"
                mesmaLinha menor className="mb-8" />
            <Janela urlDoCodigo="/codigo/midAB">
                Essa é a opção A
            </Janela>
        </Pagina>
    )
}