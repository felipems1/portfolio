import { useRef, SyntheticEvent } from 'react'
import { BiChevronsLeft, BiChevronsRight } from 'react-icons/bi'
import * as C from './styles'
import Projeto1 from '../../assets/projeto1.png'
import Projeto2 from '../../assets/projeto2.png'
import Projeto3 from '../../assets/projeto3.png'
import Projeto4 from '../../assets/projeto4.png'
import Projeto5 from '../../assets/projeto5.png'
import Projeto6 from '../../assets/projeto6.png'
import { Project } from '../Project'

export const Projects = () => {
  const carousel = useRef<HTMLDivElement | null>(null)

  const handleNext = (e: SyntheticEvent) => {
    e.preventDefault()

    carousel.current!.scrollLeft += carousel.current!.offsetWidth
  }

  const handleBack = (e: SyntheticEvent) => {
    e.preventDefault()

    carousel.current!.scrollLeft -= carousel.current!.offsetWidth
  }

  return (
    <C.Container id="projects">
      <C.Title>Projetos</C.Title>
      <C.ProjectsArea ref={carousel}>
        <Project
          image={Projeto1}
          title="Jordan Shoes"
          description="Um e-commerce fictício de tênis Jordan, que simula a venda de tênis pela internet."
          deploy="https://app-jordan-shoes.netlify.app"
          github="https://github.com/felipems1/react-jordan-shoes"
        />
        <Project
          image={Projeto2}
          title="Sistema de Chamados"
          description="Sistema de chamado de atendimento, que permite aos clientes abrir solicitações de suporte, manutenção ou assistência."
          deploy="https://sist-chamados-app.netlify.app"
          github="https://github.com/felipems1/react-sistema-de-chamados"
        />
        <Project
          image={Projeto3}
          title="Projeto Freelance"
          description="Website de uma oficina de moto."
          deploy="https://dg-motos.netlify.app/"
        />
        <Project
          image={Projeto4}
          title="Controle Financeiro"
          description="Plataforma para gerenciamento do controle de receitas e despesas."
          deploy="https://controle-financeiro-app.netlify.app"
          github="https://github.com/felipems1/controle-financeiro"
        />
        <Project
          image={Projeto5}
          title="Next Flix"
          description="A plataforma Next Flix! permite aos usuários navegar e visualizar uma ampla variedade de filmes, divididos por gêneros."
          deploy="https://next-flix-ten.vercel.app/"
          github="https://github.com/felipems1/next-flix"
        />
        <Project
          image={Projeto6}
          title="Formulário Dev"
          description="O formulário é projetado para coletar informações do usuário em várias etapas, facilitando o processo e tornando-o mais intuitivo."
          deploy="https://app-formulario.netlify.app/"
          github="https://github.com/felipems1/formulario-dev"
        />
      </C.ProjectsArea>
      <C.SlideButtons>
        <BiChevronsLeft onClick={handleBack} size={50} />
        <BiChevronsRight onClick={handleNext} size={50} />
      </C.SlideButtons>
    </C.Container>
  )
}
