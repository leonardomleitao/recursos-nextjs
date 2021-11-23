import Link from 'next/link'
import { Externo } from './icones'

interface JanelaProps {
    titulo: string
    urlDoCodigo?: string
    children: any
    largura?: string
}

export default function Janela(props: JanelaProps) {

    return (
        <div className={`
            flex flex-col rounded-lg
            bg-gradient-to-r from-gray-800 to-black
            ${props.largura ? props.largura : 'w-5/6 lg:w-3/4 xl:w-1/2'}
        `}>
            <div className="flex items-center p-4">
                <Link href="/" passHref>
                    <div className="flex cursor-pointer">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                        <div className="w-4 h-4 ml-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-4 h-4 ml-2 bg-green-600 rounded-full"></div>
                    </div>
                </Link>
                <div className="flex-1 flex justify-center text-gray-500 ">
                    {props.titulo}
                </div>
                {props.urlDoCodigo && (
                    <div className="text-gray-400 cursor-pointer">
                        <Link href={props.urlDoCodigo} passHref>
                            {Externo}
                        </Link>
                    </div>
                )}
            </div>
            <div className="p-5 text-gray-300">
                {props.children}
            </div>
        </div>
    )
}