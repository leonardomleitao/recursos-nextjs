import Image from 'next/image'
import gif from '../../public/processando.gif'

export default function Processando() {
    return (
        <div className="m-4">
            <Image src={gif} width={30} height={30} />
        </div>
    )
}