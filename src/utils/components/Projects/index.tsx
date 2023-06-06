import { useRef } from "react";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import * as C from "./style";
import Projeto1 from "../../assets/projeto1.png";
import Projeto2 from "../../assets/projeto2.png";
import Projeto3 from "../../assets/projeto3.png";
import Projeto4 from "../../assets/projeto4.png";
import Projeto5 from "../../assets/projeto5.png";
import Projeto6 from "../../assets/projeto6.png";
import Project from "../Project";

const Projects = () => {
  const carousel = useRef<HTMLDivElement | null>(null);

  const handleNext = (e: React.SyntheticEvent) => {
    e.preventDefault();

    carousel.current!.scrollLeft += carousel.current!.offsetWidth;
  };

  const handleBack = (e: React.SyntheticEvent) => {
    e.preventDefault();

    carousel.current!.scrollLeft -= carousel.current!.offsetWidth;
  };

  return (
    <C.Container id="projects">
      <C.Title>Projetos</C.Title>
      <C.ProjectsArea ref={carousel}>
        <Project
          image={Projeto1}
          title="Jordan Shoes"
          description="Tecnologias: ReactJS, TypeScript, Styled-Components, Axios e Redux."
          deploy="https://app-jordan-shoes.netlify.app"
          github="https://github.com/felipems1/react-jordan-shoes"
        />
        <Project
          image={Projeto2}
          title="Sistema de Chamados"
          description="Tecnologias: ReactJS, JavaScript, CSS, Context API e Firebase"
          deploy="https://sist-chamados-app.netlify.app"
          github="https://github.com/felipems1/react-sistema-de-chamados"
        />
        <Project
          image={Projeto3}
          title="Next Flix"
          description="Tecnologias: NextJS, TypeScript, Tailwind CSS e Axios"
          deploy="https://next-flix-ten.vercel.app/"
          github="https://github.com/felipems1/next-flix"
        />
        <Project
          image={Projeto4}
          title="Controle Financeiro"
          description="Tecnologias: ReactJS, TypeScript, CSS e Firebase"
          deploy="https://controle-financeiro-app.netlify.app"
          github="https://github.com/felipems1/react-controle-financeiro"
        />
        <Project
          image={Projeto5}
          title="Formulário"
          description="Tecnologias: ReactJS, TypeScript, Styled-Components e Context API"
          deploy="https://app-formulario.netlify.app"
          github="https://github.com/felipems1/react-form"
        />
        <Project
          image={Projeto6}
          title="HomeYou"
          description="Tecnologias: ReactJS, TypeScript e Styled-Components"
          deploy="https://app-homeyou.netlify.app"
          github="https://github.com/felipems1/react-homeyou"
        />
      </C.ProjectsArea>
      <C.SlideButtons>
        <BiChevronsLeft onClick={handleBack} size={50} />
        <BiChevronsRight onClick={handleNext} size={50} />
      </C.SlideButtons>
    </C.Container>
  );
};

export default Projects;
