import { Header } from './components/Header'
import { Home } from './components/Home'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Courses } from './components/Courses'
import { AcademicEducation } from './components/AcademicEducation'
import { GlobalStyle } from './styles/global'
import 'react-tooltip/dist/react-tooltip.css'

export function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <AcademicEducation />
      <Courses />
      <GlobalStyle />
    </>
  )
}
