import Link from 'next/link'
import { SetaDireita } from "./icones"

interface LinkGithubProps {
    className?: string
}

export default function LinkGithub(props: LinkGithubProps) {
    return (
        <Link href="https://github.com/leonardomleitao/recursos-nextjs/tree/com-react-beta">
            <a target="_blank">
                <div className={`
                    flex items-center
                    font-extralight text-2xl md:text-3xl text-pink-500
                    ${props.className}
                `}>
                    Código no Github <span className="ml-4">{SetaDireita()}</span>
                </div>
            </a>
        </Link>
    )
}