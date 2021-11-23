import Janela from '../../components/Janela'
import Pagina from '../../components/Pagina'
import Titulo from '../../components/Titulo'
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
        return props.nomes?.map((nome: string, i: number) => {
            return <li key={i}>{nome}</li>
        })
    }

    return (
        <Pagina>
            <Titulo inicial="SSG" final="com Dados"
                mesmaLinha menor className="mb-10" />
            <Janela urlDoCodigo="/codigo/ssg2" className="w-3/4 lg:w-1/2">
                <div>
                    Gerado em:
                    <span className="font-bold"> {props.geradoEm}</span>
                </div>
                <ul className="list-disc ml-10 mt-5">
                    {renderizarNomes()}
                </ul>
            </Janela>
        </Pagina>
    )
}
