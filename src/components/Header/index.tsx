import { useState } from "react";
import * as C from "./style";
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [menu, setMenu] = useState(true);

  const menuToggler = () => {
    menu === false ? setMenu(true) : setMenu(false);
  };

  const handleMenu = () => {
    setMenu(true);
  };

  return (
    <C.Container>
      <C.Header>
        <C.Title>Portfólio</C.Title>
        <C.ButtonMobile onClick={menuToggler}>
          {menu ? (
            <CgMenu size={25} color="#00D2DF" />
          ) : (
            <AiOutlineClose size={25} color="#00D2DF" />
          )}
        </C.ButtonMobile>
        <C.Options menu={menu}>
          <C.Option>
            <C.Link onClick={handleMenu} href="#home">
              Início
            </C.Link>
          </C.Option>
          <C.Option>
            <C.Link onClick={handleMenu} href="#about">
              Sobre
            </C.Link>
          </C.Option>
          <C.Option>
            <C.Link onClick={handleMenu} href="#skills">
              Habilidades
            </C.Link>
          </C.Option>
          <C.Option>
            <C.Link onClick={handleMenu} href="#projects">
              Projetos
            </C.Link>
          </C.Option>
          <C.Option>
            <C.Link onClick={handleMenu} href="#courses">
              Cursos
            </C.Link>
          </C.Option>
        </C.Options>
      </C.Header>
    </C.Container>
  );
};

export default Header;
