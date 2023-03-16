import * as C from "./style";
import Instagram from "../../assets/instagram.png";
import Email from "../../assets/mail.png";
import Phone from "../../assets/phone.png";
import Smile from "../../assets/smile.png";

const About = () => {
  return (
    <C.Container id="about">
      <C.About>
        <C.Title>Sobre</C.Title>
        <C.Description>
          Desenvolvedor Front-end, com experiência de atuação em grandes
          projetos, comecei minha jornada na programação em 2022, sou um
          apaixonado por tecnologia, educação, gosto sempre de estar em
          constante aprendizado evoluindo dia após dia. Atualmente estou
          trabalhando com as tecnologias ReactJS, JavaScript, TypeScript, HTML,
          CSS, Redux, Context API, React Hooks, Git, Github, Axios, Firebase,
          Styled-Components, Tailwind CSS entre outras tecnologias que uso para
          criar aplicações web de alto nível e valor.
        </C.Description>
        <C.Social>
          <C.Contact>
            <C.Logo src={Smile} alt="Logo Smile" />
            <C.TitleContact>Meu Nome</C.TitleContact>
            <C.TitleDescription>Felipe Moises</C.TitleDescription>
          </C.Contact>
          <C.Contact>
            <C.Logo src={Email} alt="Logo E-mail" />
            <C.TitleContact>E-mail</C.TitleContact>
            <C.TitleDescription>083felype@gmail.com</C.TitleDescription>
          </C.Contact>
          <C.Contact>
            <C.Logo src={Instagram} alt="Logo Instagram" />
            <C.TitleContact>Instagram</C.TitleContact>
            <C.TitleDescription>@felype_047</C.TitleDescription>
          </C.Contact>
          <C.Contact>
            <C.Logo src={Phone} alt="Logo Telefone" />
            <C.TitleContact>Telefone</C.TitleContact>
            <C.TitleDescription>&#40;83&#41; 99871-9705</C.TitleDescription>
          </C.Contact>
        </C.Social>
      </C.About>
    </C.Container>
  );
};

export default About;
