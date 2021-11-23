import Janela from '../../components/Janela'
import Pagina from '../../components/Pagina'
import Titulo from '../../components/Titulo'

export default function SSG1() {
    return (
        <Pagina>
            <Titulo inicial="SSG" final="sem Dados"
                mesmaLinha menor className="mb-8" />
            <Janela urlDoCodigo="/codigo/ssg1" className="w-3/4 lg:w-1/2">
                <div>Conteúdo Estático Simples</div>
            </Janela>
        </Pagina>
    )
}
