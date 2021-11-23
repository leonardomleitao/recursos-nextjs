import Janela from "../../components/Janela"
import Pagina from "../../components/Pagina"
import confetti from 'https://cdn.skypack.dev/canvas-confetti'
import Titulo from "../../components/Titulo"

export default function UrlImport() {

    return (
        <Pagina>
            <Titulo inicial="URL" final="Import"
                mesmaLinha menor className="mb-8" />
            <Janela urlDoCodigo="/codigo/urlImport" className="w-3/4 lg:w-1/2">
                <div className="flex justify-center py-5">
                    <button
                        onClick={() => confetti()}
                        className={`
                            bg-gradient-to-r from-pink-600 to-yellow-600
                            p-3 rounded-md
                        `}
                    >
                        É Ritmo de Festa!
                    </button>
                </div>
            </Janela>
        </Pagina>
    )
}