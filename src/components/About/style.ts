import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #151515;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const About = styled.div`
  width: 800px;
  background-color: #151515;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  color: #fff;
`;

export const Description = styled.p`
  color: #c4c4c4;
  margin-top: 40px;
  line-height: 150%;

  @media (max-width: 840px) {
    padding: 0 15px;
  }
`;

export const Social = styled.div`
  display: flex;
  margin-top: 50px;

  @media (max-width: 430px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const Contact = styled.div`
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 430px) {
    width: 150px;
    margin-bottom: 15px;
  }
`;

export const Logo = styled.img`
  width: 32px;
  height: 32px;
`;

export const TitleContact = styled.h3`
  color: #fff;
`;

export const TitleDescription = styled.p`
  color: #c4c4c4;
`;
