import Link from 'next/link'

export interface MenuItemProps {
    titulo: string
    url: string
    icone: any
    cor?: string
    className?: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url} passHref>
            <div className={`
                flex flex-col items-center cursor-pointer w-28
            `}>
                <div className={`
                    flex justify-center items-center bg-black
                    w-20 h-20 rounded-xl text-gray-300
                    border border-gray-400
                    bg-gradient-to-r from-${props.cor ?? 'gray'}-600 via-${props.cor ?? 'gray'}-600 to-${props.cor ?? 'gray'}-700
                    ${props.className}
                `}>
                    {props.icone}
                </div>
                <div className="text-center text-gray-200 font-light">
                    {props.titulo}
                </div>
            </div>
        </Link>
    )
    // return (
    //     <div className="flex h-20">
    //         {props.indice != 1 && (
    //             <div style={{ marginTop: 47 }} className={`
    //                 w-20 h-0.5 ${props.visitado ? 'bg-green-600' : 'bg-gray-600'}
    //             `} />
    //         )}
    //         <div className={`
    //             relative flex flex-col items-center
    //             w-10 h-10 text-gray-300
    //         `}>
    //             <div className="whitespace-nowrap">{props.titulo}</div>
    //             <Link href={props.url}  passHref>
    //                 <div className={`
    //                     flex justify-center items-center top-2 cursor-pointer
    //                     absolute w-full h-full rounded-full mt-5 font-black
    //                     ${props.visitado ? 'bg-green-600' : 'bg-gray-600'}
    //                 `}>{props.indice}</div>
    //             </Link>
    //         </div>
    //     </div>
    // )
    // return (
    //     <div className="flex flex-col">
    //         <div className="self-end mb-2 text-gray-300">{props.titulo}</div>
    //         <div className="flex items-center">
    //             {props.indice != 1 && (
    //                 <div className="flex justify-center items-center h-1 w-20 bg-gray-600 overflow-visible relative">
    //                     <div className={`
    //                         h-1 w-28 ${props.visitado ? 'bg-green-500' : ''}
    //                     `} />
    //                 </div>
    //             )}
    //             <div className="flex justify-center items-center w-12 h-12 -m-1 rounded-full bg-gray-600 z-10">
    //                 <div className={`
    //                     flex justify-center items-center 
    //                     w-12 h-12 rounded-full text-xl font-black
    //                     ${props.visitado ? 'bg-green-500' : ''}  text-white
    //                 `}>
    //                     {props.indice}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}