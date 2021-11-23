interface PaginaProps {
    boxed?: boolean
    children: any
}

export default function Pagina(props: PaginaProps) {

    return (
        <div className={`
            flex flex-col justify-center items-center min-h-screen
            bg-gradient-to-r from-gray-900 to-black py-5
        `}>
            {props.boxed 
                ? <div style={{ maxWidth: 900 }}>{props.children}</div>
                : props.children
            }
        </div>
    )
}