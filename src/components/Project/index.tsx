import * as C from './styles'
import Link from '../../assets/link.svg'
import Github from '../../assets/github.svg'

interface Props {
  image: string
  title: string
  description: string
  deploy: string
  github?: string
}

export const Project = ({
  image,
  title,
  description,
  deploy,
  github,
}: Props) => {
  return (
    <C.Project>
      <C.Image src={image} />
      <C.TitleProject>{title}</C.TitleProject>
      <C.DescriptionProject>{description}</C.DescriptionProject>
      <C.ButtonsArea>
        <C.Button href={deploy} target="_blank">
          <C.Logo src={Link} alt="Logo Link" />
          Visualizar
        </C.Button>
        {github && (
          <C.Button href={github} target="_blank">
            <C.Logo src={Github} alt="Logo Github" />
            Github
          </C.Button>
        )}
      </C.ButtonsArea>
    </C.Project>
  )
}
