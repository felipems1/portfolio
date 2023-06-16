import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
`

export const Header = styled.header`
  width: 950px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(55, 55, 55, 0.8);
`

export const Title = styled.h2`
  color: #00d2df;
  @media (max-width: 840px) {
    padding-left: 15px;
  }
`

interface OptionsProps {
  menu?: boolean
}

export const Options = styled.ul<OptionsProps>`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 30px;

  @media (max-width: 840px) {
    display: ${(props) => (props.menu ? 'none' : 'block')};
    position: absolute;
    top: 80px;
    right: 0;
    left: 0;
    background-color: #222;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
`

export const Option = styled.li`
  font-weight: 500;

  @media (min-width: 1000px) {
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s;
    }
  }

  @media (max-width: 840px) {
    padding: 20px 15px;
    font-size: 20px;
    border-bottom: 1px solid #00d2df;
  }
`

export const Link = styled.a`
  text-decoration: none;
  color: #c4c4c4;

  &:hover {
    color: #fff;
  }
`

export const ButtonMobile = styled.button`
  display: none;

  @media (max-width: 840px) {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    background: transparent;
    padding-right: 15px;
  }
`
