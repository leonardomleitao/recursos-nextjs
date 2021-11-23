interface DescricaoProps {
    children: any
    className: string
}

export default function Descricao(props: DescricaoProps) {
    return (
        <div className={`${props.className} w-80 sm:w-96 lg:w-full`}>
            <h2 className={`text-xl sm:text-2xl lg:text-3xl text-white font-thin`}>
                {props.children}
            </h2>
        </div>
    )
}