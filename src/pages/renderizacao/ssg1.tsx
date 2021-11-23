import PaginaExemplo from '../../components/PaginaExemplo'

export default function SSG1() {
    return (
        <PaginaExemplo titulo={['SSG', 'sem Dados']} urlDoCodigo="/codigo/ssg1">
            <div>Conteúdo Estático Simples</div>
        </PaginaExemplo>
    )
}
