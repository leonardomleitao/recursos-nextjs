import Janela from "../../components/Janela"
import Pagina from "../../components/Pagina"
import confetti from 'https://cdn.skypack.dev/canvas-confetti'

export default function UrlImport() {

    return (
        <Pagina>
            <Janela titulo="Url Import" urlDoCodigo="/codigo/urlImport">
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