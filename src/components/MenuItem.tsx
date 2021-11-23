import { motion } from 'framer-motion'
import Link from 'next/link'
import { SetaDireita } from './icones'

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
            <motion.div className={`
                flex flex-col cursor-pointer
                text-white rounded-xl h-28 w-72 md:w-96 my-2 shadow-lg p-5
                relative ${props.className}
            `} whileHover={{ scale: 1.1, x: 30 }} transition={{ duration: 0.3 }}>
                <div className="font-thin text-xl md:text-2xl">{props.titulo}</div>
                <div className="h-full"></div>
                <div className="flex items-center font-bold">
                    Acessar <span className="ml-2">{SetaDireita('h-5 w-5')}</span>
                </div>
                <div className="absolute bottom-4 right-4 font-light text-2xl">
                    {props.icone}
                </div>
            </motion.div>
        </Link>
    )
}