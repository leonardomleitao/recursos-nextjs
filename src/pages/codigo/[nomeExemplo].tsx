import ExibirCodigo from '../../components/ExibirCodigo'
import Janela from '../../components/Janela'
import Pagina from '../../components/Pagina'
import exemplos from '../../data/exemplos'

export function getStaticPaths() {
    const paths = Object.keys(exemplos).map(nomeExemplo => {
        return { params: { nomeExemplo } }
    })
    return { paths, fallback: false }
}

export function getStaticProps({ params }) {
    const { nomeExemplo } = params
    return {
        props: { nomeExemplo }
    }
}

export default function CodigoDoExemplo(props) {
    const exemplo = exemplos[props.nomeExemplo]
    return exemplo ? (
        <Pagina>
            <Janela
                titulo={`Código do exemplo: ${props.nomeExemplo}`}
                urlDoCodigo="/codigo/codigo"
                urlVoltar={exemplo.voltarPara ? exemplo.voltarPara : '/'}
            >
                <ExibirCodigo exemplo={exemplo} />
            </Janela>
        </Pagina>
    ) : null
}
