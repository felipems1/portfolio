import * as C from "./style";

const Training = () => {
  return (
    <C.Container id="training">
      <C.Title>Formação acadêmica</C.Title>
      <C.CoursesArea>
        <C.CourseArea>
          <C.TitleCourse>Sistemas para Internet</C.TitleCourse>
          <C.DescriptionCourse>
            Universidade Cruzeiro do Sul Virtual
          </C.DescriptionCourse>
          <C.ConclusionCourse>
            Previsão de conclusão: Dezembro de 2024
          </C.ConclusionCourse>
        </C.CourseArea>
      </C.CoursesArea>
    </C.Container>
  );
};

export default Training;
