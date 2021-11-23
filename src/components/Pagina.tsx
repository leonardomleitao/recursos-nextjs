interface PaginaProps {
    children: any
}

export default function Pagina(props: PaginaProps) {

    return (
        <div className={`
            flex flex-col justify-center items-center min-h-screen
            bg-gradient-to-r from-gray-500 to-gray-700
            py-5
        `}>
            {props.children}
        </div>
    )
}