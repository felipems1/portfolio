import * as C from "./style";

const Courses = () => {
  return (
    <C.Container id="courses">
      <C.Title>Cursos</C.Title>
      <C.CoursesArea>
        <C.CourseOne>
          <C.TitleCourse>Discover</C.TitleCourse>
          <C.DescriptionCourse>Rocketseat</C.DescriptionCourse>
        </C.CourseOne>
        <C.CourseTwo>
          <C.TitleCourse>Fábrica de Aplicativos</C.TitleCourse>
          <C.DescriptionCourse>Sujeito Programador</C.DescriptionCourse>
        </C.CourseTwo>
        <C.CourseThree>
          <C.TitleCourse>Full Stack</C.TitleCourse>
          <C.DescriptionCourse>B7web</C.DescriptionCourse>
        </C.CourseThree>
      </C.CoursesArea>
    </C.Container>
  );
};

export default Courses;
