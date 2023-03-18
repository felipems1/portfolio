import styled from "styled-components";

export const Container = styled.div`
  background-color: #121212;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  animation: appear 2s alternate;

  @keyframes appear {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const Info = styled.div`
  margin-left: 100px;

  @media (max-width: 430px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    padding: 0 15px;
  }
`;

export const Image = styled.img`
  @media (max-width: 430px) {
    display: none;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: #fff;
  font-size: 25px;

  @media (max-width: 430px) {
    font-size: 20px;
  }
`;

export const Description = styled.h1`
  text-transform: uppercase;
  color: #00d2df;
  font-size: 50px;

  @media (max-width: 430px) {
    font-size: 40px;
  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  margin-top: 50px;

  @media (max-width: 430px) {
    justify-content: center;
  }
`;

export const Button = styled.a`
  text-decoration: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 50px;
  border: 2px solid #00d2df;
  margin-right: 20px;
  color: #fff;
  border-radius: 5px;
  transition: all ease 0.8s;

  &:hover {
    transform: scale(1.1);
    border: 2px solid #ff1cf7;
  }

  @media (max-width: 430px) {
    padding: 8px 40px;
  }

  @media (max-width: 390px) {
    padding: 8px 30px;
  }
`;

export const Logo = styled.img`
  width: 15px;
  margin-right: 10px;
`;
