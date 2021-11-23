import Link from 'next/link'
import { Externo, X } from './icones'

interface JanelaProps {
    titulo?: string
    urlDoCodigo?: string
    urlVoltar?: string
    children: any
    className?: string
}

export default function Janela(props: JanelaProps) {

    return (
        <div className={`flex flex-col rounded-lg bg-gray-800 ${props.className}`}>
            <div className="flex items-center p-4">
                <Link href={props.urlVoltar ? props.urlVoltar : '/'} passHref>
                    <div className="flex cursor-pointer">
                        <div className="flex justify-center items-center w-4 h-4 bg-red-500 rounded-full text-white">
                            <div className="opacity-0 hover:opacity-100">{X('w-3 h-3')}</div>
                        </div>
                        <div className="flex justify-center items-center w-4 h-4 ml-2 bg-yellow-500 rounded-full text-white">
                            <div className="opacity-0 hover:opacity-100">{X('w-3 h-3')}</div>
                        </div>
                        <div className="flex justify-center items-center w-4 h-4 ml-2 bg-green-600 rounded-full text-white">
                            <div className="opacity-0 hover:opacity-100">{X('w-3 h-3')}</div>
                        </div>
                    </div>
                </Link>
                <div className="flex-1 flex justify-center text-gray-500 ">
                    {props.titulo}
                </div>
                {props.urlDoCodigo && (
                    <div className="text-gray-500 cursor-pointer">
                        <Link href={props.urlDoCodigo} passHref>
                            {Externo}
                        </Link>
                    </div>
                )}
            </div>
            <div className="p-5 text-gray-300 text-2xl">
                {props.children}
            </div>
        </div>
    )
}