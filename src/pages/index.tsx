import Pagina from '../components/Pagina'
import Menu from '../components/Menu'
import Titulo from '../components/Titulo'
import Descricao from '../components/Descricao'
import LinkGithub from '../components/LinkGithub'

export default function Home() {
  return (
    <Pagina boxed>
      <div className="flex flex-col lg:flex-row items-center">
        <div className={`
          flex flex-col
          items-center lg:items-start text-center lg:text-left
        `}>
          <Titulo inicial="Recursos" final="do Next.js" />
          <Descricao className="mt-10">
            Nesse exemplo vou usar a versão
            <span className="text-yellow-400 font-light"> estável </span>
            do Next.js para mostrar os principais recursos atuais.
          </Descricao>
          <LinkGithub className="mt-8" />
        </div>
        <div className="h-5 lg:w-10"></div>
        <Menu />
      </div>
    </Pagina>
  )
}
