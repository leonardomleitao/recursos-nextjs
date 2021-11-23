interface TituloProps {
    inicial: string
    final: string
    mesmaLinha?: boolean
    className?: string
    menor?: boolean
}

export default function Titulo(props: TituloProps) {
    return (
        <div className={`
            ${props.mesmaLinha ? 'flex flex-col sm:flex-row' : ''}
            text-center sm:text-left
            ${props.className}
        `}>
            <h1 className={`
                text-5xl md:text-6xl ${props.menor ? '' : 'lg:text-8xl'} 
                font-extrabold text-white
            `}>
                {props.inicial}
            </h1>
            {props.mesmaLinha && <div className="sm:w-3 md:w-3 lg:w-5" />}
            <h1 className={`
                text-5xl md:text-6xl ${props.menor ? '' : 'lg:text-8xl'}
                font-extrabold text-transparent bg-clip-text
                bg-gradient-to-r from-purple-600 to-pink-600
            `}>
                {props.final}
            </h1>
        </div>
    )
}