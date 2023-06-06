import styled from "styled-components";

export const Project = styled.div`
  width: 400px;
  height: 320px;
  background-color: #202020;
  padding: 15px 10px;
  margin: 0 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: none;

  @media (min-width: 768px) and (max-width: 834px) {
    width: 47vw;
    margin: 0 10px;
  }

  @media (max-width: 428px) {
    width: 95vw;
    margin: 0 10px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
`;

export const TitleProject = styled.h3`
  color: #fff;
`;

export const DescriptionProject = styled.p`
  color: #c4c4c4;
`;

export const ButtonsArea = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #fff;
  border: 2px solid #00d2df;
  border-radius: 5px;
  padding: 5px 25px;
  transition: all ease 0.9s;

  &:hover {
    border: 2px solid #ff1cf7;
  }
`;

export const Logo = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;
