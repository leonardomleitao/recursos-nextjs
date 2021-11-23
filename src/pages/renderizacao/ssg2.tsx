import Janela from '../../components/Janela'
import Pagina from '../../components/Pagina'
import { formatarDataHora } from '../../utils/data'
import Http from '../../utils/http'

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
        return props.nomes?.map((el, i) => {
            return <li key={i}>{el}</li>
        })
    }

    return (
        <Pagina>
            <Janela titulo="Static Site Generation com Dados" urlDoCodigo="/codigo/ssg2">
                <div>Gerado em: <span className="font-bold">{props.geradoEm}</span></div>
                <ul className="list-disc ml-5 mt-5">
                    {renderizarNomes()}
                </ul>
            </Janela>
        </Pagina>
    )
}
