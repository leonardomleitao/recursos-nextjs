import { Atualizar, BD, Documento, Engrenagem } from "./icones";
import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <div className="flex flex-col">
            <MenuItem
                titulo="SSG sem Dados"
                url="/renderizacao/ssg1"
                icone={Documento}
                className="bg-purple-500"
            />
            <MenuItem
                titulo="SSG com Dados"
                url="/renderizacao/ssg2"
                icone={BD}
                className="bg-pink-500"
            />
            <MenuItem
                titulo="Server-Side Rendering"
                url="/renderizacao/ssr"
                icone={Engrenagem}
                className="bg-yellow-600"
            />
            <MenuItem
                titulo="Integrando SSG & CSR"
                url="/renderizacao/ssgCsr"
                icone={Atualizar}
                className="bg-green-600"
            />
        </div>
    )
}