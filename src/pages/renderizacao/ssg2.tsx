import PaginaExemplo from '../../components/PaginaExemplo'
import Http from '../../utils/http'
import { formatarDataHora } from '../../utils/data'

export async function getStaticProps() {
    const nomes = await Http.get('/api/nomes')

    return {
        props: {
            geradoEm: formatarDataHora(new Date),
            nomes
        },
        revalidate: 60,
    }
}

export default function SSG2(props) {

    function renderizarNomes() {
        return props.nomes?.map((nome: string, i: number) => {
            return <li key={i}>{nome}</li>
        })
    }

    return (
        <PaginaExemplo titulo={['SSG', 'com Dados']} urlDoCodigo="/codigo/ssg2">
            <div>
                Gerado em:
                <span className="font-bold"> {props.geradoEm}</span>
            </div>
            <ul className="list-disc ml-10 mt-5">
                {renderizarNomes()}
            </ul>
        </PaginaExemplo>
    )
}
