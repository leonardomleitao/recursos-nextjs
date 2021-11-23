import { Atualizar, BD, Documento, Engrenagem } from "./icones";
import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-10">
            <MenuItem
                titulo="SSG sem Dados"
                url="/renderizacao/ssg1"
                icone={Documento}
                cor="red"
            />
            <MenuItem
                titulo="SSG com Dados"
                url="/renderizacao/ssg2"
                icone={BD}
                cor="purple"
            />
            <MenuItem
                titulo="Server-Side Rendering"
                url="/renderizacao/ssr"
                icone={Engrenagem}
                cor="blue"
            />
            <MenuItem
                titulo="Integrando SSG + CSR"
                url="/renderizacao/ssgCsr"
                icone={Atualizar}
                cor="green"
            />
        </div>
    )
}