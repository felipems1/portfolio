import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #151515;
`

export const Title = styled.h1`
  color: #fff;
  text-align: center;
`

export const ProjectsArea = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin-top: 30px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const SlideButtons = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px auto 0 auto;

  svg {
    color: #00d2df;
    transition: all ease 0.8s;
    cursor: pointer;
  }

  svg:hover {
    transform: scale(1.2);
    color: #ff1cf7;
  }
`
