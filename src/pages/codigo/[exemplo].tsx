import ExibirCodigo from '../../components/ExibirCodigo'
import Janela from '../../components/Janela'
import Pagina from '../../components/Pagina'
import exemplos from '../../data/exemplos'

export function getStaticPaths() {
    const paths = Object.keys(exemplos).map(exemplo => {
        return { params: { exemplo } }
    })
    return { paths, fallback: false }
}

export function getStaticProps({ params }) {
    const { exemplo } = params
    return {
        props: { exemplo }
    }
}

export default function CodigoDoExemplo(props) {
    return props.exemplo ? (
        <Pagina>
            <Janela
                titulo={`Código do exemplo: ${props.exemplo}`}
                urlDoCodigo="/codigo/codigo"
                largura="w-3/4"
            >
                <ExibirCodigo exemplo={props.exemplo} />
            </Janela>
        </Pagina>
    ) : null
}
