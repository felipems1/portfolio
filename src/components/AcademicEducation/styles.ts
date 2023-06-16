import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #121212;
`

export const Title = styled.h1`
  color: #fff;
`

export const CoursesArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`

export const CourseArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 4px solid #00d2df;
  border-right: 4px solid #00d2df;
  padding: 0 40px;

  @media (max-width: 840px) {
    border: none;
    border-top: 1px solid #00d2df;
    border-bottom: 1px solid #00d2df;
    padding: 30px 40px;
  }
`

export const TitleCourse = styled.h3`
  color: #fff;
  font-size: 30px;
  text-align: center;
`

export const DescriptionCourse = styled.h4`
  color: #c4c4c4;
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
`

export const ConclusionCourse = styled.span`
  color: #d9d9d9;
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
`
