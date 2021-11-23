interface TituloProps {
    texto: string
}

export default function Titulo(props: TituloProps) {
    return (
        <div className={`
            bg-gradient-to-r from-gray-800 to-gray-900
            rounded-xl px-12 py-6 mb-20
        `}>
            <h1 className="text-xl md:text-5xl font-black text-gray-200">
                {props.texto}
            </h1>
        </div>
    )
}