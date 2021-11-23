import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

import linguagens from '../data/linguagens'
import exemplos from '../data/exemplos'

interface ExibirCodigoProps {
    exemplo: string
}

export default function ExibirCodigo(props: ExibirCodigoProps) {
    const exemplo = exemplos[props.exemplo]
    const linguagem = linguagens[exemplo.linguagem] ?? linguagens.javascript
    const html = Prism.highlight(
        exemplo.codigo?.trim(),
        linguagem.constante,
        linguagem.id
    )

    return (
        <pre>
            <code className="font-mono text-2xl">
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
            </code>
        </pre>
    )
}