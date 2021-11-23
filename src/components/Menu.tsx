import { useEffect, useState } from "react";
import { Atualizar, BD, Documento, Engrenagem, Hash, Link, Server } from "./icones";
import MenuItem from "./MenuItem";

export default function Menu() {
    const [grupo, setGrupo] = useState<string>('Originais')

    useEffect(() => {
        carregarGrupo()
    }, [])

    function carregarGrupo() {
        const grupo = localStorage?.getItem('grupoMenu') ?? 'Originais'
        setGrupo(grupo)
    }

    function alterarGrupo(grupo: string) {
        setGrupo(grupo)
        localStorage?.setItem('grupoMenu', grupo)
    }

    return (
        <div className="flex flex-col items-center">
            <div className={`
                flex justify-around rounded-md
                bg-gradient-to-r from-purple-500 to-pink-500 
                w-56 mb-7
            `}>
                <div onClick={() => alterarGrupo('Originais')} className={`
                    py-1 cursor-pointer
                    ${grupo === 'Originais' ? 'font-bold text-white' : 'text-gray-300'}
                `}>Originais</div>
                <div onClick={() => alterarGrupo('Novos')} className={`
                    py-1 cursor-pointer
                    ${grupo === 'Novos' ? 'font-bold text-white' : 'text-gray-300'}
                `}>Novos</div>
            </div>
            {grupo === 'Originais' ? (
                <>
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
                </>
            ) : (
                <>
                    <MenuItem
                        titulo="Middleware Simples"
                        url="/mid/simples"
                        icone={Hash}
                        className="bg-green-600"
                    />
                    <MenuItem
                        titulo="Middleware Teste A/B"
                        url="/mid/ab"
                        icone={Hash}
                        className="bg-indigo-500"
                    />
                    <MenuItem
                        titulo="URL Import"
                        url="/url/import"
                        icone={Link}
                        className="bg-red-500"
                    />
                    <MenuItem
                        titulo="Server Component"
                        url="/componente/noticias"
                        icone={Server}
                        className="bg-yellow-600"
                    />
                </>
            )}

        </div>
    )
}