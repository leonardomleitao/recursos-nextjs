import PaginaExemplo from "../../components/PaginaExemplo"
import confetti from 'https://cdn.skypack.dev/canvas-confetti'

export default function UrlImport() {

    return (
        <PaginaExemplo titulo={['URL', 'Import']}
            urlDoCodigo="/codigo/urlImport">
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
        </PaginaExemplo>
    )
}