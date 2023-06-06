import * as C from "./style";
import Illustration from "../../assets/illustration.svg";
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";

const Home = () => {
  return (
    <C.Container id="home">
      <C.Info>
        <C.Title>Olá eu sou</C.Title>
        <C.Description>Felipe Moises</C.Description>
        <C.Title>Desenvolvedor Front-end.</C.Title>
        <C.ButtonsArea>
          <C.Button href="https://www.linkedin.com/in/felipems1/">
            <C.Logo src={Linkedin} alt="Logo Linkedin" />
            LinkedIn
          </C.Button>
          <C.Button href="https://github.com/felipems1">
            <C.Logo src={Github} alt="Logo Github" />
            Github
          </C.Button>
        </C.ButtonsArea>
      </C.Info>
      <C.Image src={Illustration} />
    </C.Container>
  );
};

export default Home;
