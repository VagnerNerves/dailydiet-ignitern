import { Circle, Container, TYPE_COLOR, Title } from './styles'

interface TagProps {
  title: string
  color: TYPE_COLOR
}
export function Tag({ title, color }: TagProps) {
  return (
    <Container>
      <Circle color={color} />
      <Title>{title}</Title>
    </Container>
  )
}
