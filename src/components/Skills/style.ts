import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Skills = styled.div`
  width: 950px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: #fff;
`;

export const MySkills = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 50px;

  @media (max-width: 428px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
`;

export const Skill = styled.div`
  width: 140px;
  height: 140px;
  background-color: #202020;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;
`;
