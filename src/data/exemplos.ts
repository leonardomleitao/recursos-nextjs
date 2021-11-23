import { codigo, midAB, midSimples, serverComponent, ssg1, ssg2, ssgcsr, ssr, urlImport } from "./codigos"

const exemplos = {
    ssg1: { linguagem: 'tsx', codigo: ssg1, voltarPara: '/renderizacao/ssg1' },
    ssg2: { linguagem: 'tsx', codigo: ssg2, voltarPara: '/renderizacao/ssg2' },
    ssr: { linguagem: 'tsx', codigo: ssr, voltarPara: '/renderizacao/ssr' },
    ssgcsr: { linguagem: 'tsx', codigo: ssgcsr, voltarPara: '/renderizacao/ssgCsr' },
    codigo: { linguagem: 'tsx', codigo: codigo, voltarPara: '' },
    urlImport: { linguagem: 'tsx', codigo: urlImport, },
    midSimples: { linguagem: 'tsx', codigo: midSimples, },
    midAB: { linguagem: 'tsx', codigo: midAB, },
    serverComponent: { linguagem: 'tsx', codigo: serverComponent, voltarPara: '/componente/noticias' },
}

export default exemplos