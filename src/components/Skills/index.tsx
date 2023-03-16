import { Tooltip } from "react-tooltip";
import * as C from "./style";
import react from "../../assets/react.png";
import javascript from "../../assets/javascript.png";
import typescript from "../../assets/typescript.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import git from "../../assets/git.png";
import styled from "../../assets/styled.png";
import redux from "../../assets/redux.png";

const Skills = () => {
  return (
    <C.Container id="skills">
      <C.Skills>
        <C.Title>Habilidades</C.Title>
        <C.MySkills>
          <C.Skill
            data-tooltip-id="html"
            data-tooltip-content="HTML"
            data-tooltip-place="top"
          >
            <Tooltip id="html" />
            <C.Logo src={html} alt="Logo HTML" />
          </C.Skill>
          <C.Skill
            data-tooltip-id="css"
            data-tooltip-content="CSS"
            data-tooltip-place="top"
          >
            <Tooltip id="css" />
            <C.Logo src={css} alt="Logo CSS" />
          </C.Skill>
          <C.Skill
            data-tooltip-id="js"
            data-tooltip-content="JavaScript"
            data-tooltip-place="top"
          >
            <Tooltip id="js" />
            <C.Logo src={javascript} alt="Logo JavaScript" />
          </C.Skill>
          <C.Skill
            data-tooltip-id="ts"
            data-tooltip-content="TypeScript"
            data-tooltip-place="top"
          >
            <Tooltip id="ts" />
            <C.Logo src={typescript} alt="Logo TypeScript" />
          </C.Skill>
          <C.Skill
            data-tooltip-id="react"
            data-tooltip-content="ReactJS"
            data-tooltip-place="top"
          >
            <Tooltip id="react" />
            <C.Logo src={react} alt="Logo React" />
          </C.Skill>
          <C.Skill
            data-tooltip-id="git"
            data-tooltip-content="Git"
            data-tooltip-place="top"
          >
            <Tooltip id="git" />
            <C.Logo src={git} alt="Logo Git" />
          </C.Skill>
          <C.Skill
            data-tooltip-id="styled"
            data-tooltip-content="Styled-Components"
            data-tooltip-place="top"
          >
            <Tooltip id="styled" />
            <C.Logo src={styled} alt="Logo Styled" />
          </C.Skill>
          <C.Skill
            data-tooltip-id="redux"
            data-tooltip-content="Redux"
            data-tooltip-place="top"
          >
            <Tooltip id="redux" />
            <C.Logo src={redux} alt="Logo Redux" />
          </C.Skill>
        </C.MySkills>
      </C.Skills>
    </C.Container>
  );
};

export default Skills;
