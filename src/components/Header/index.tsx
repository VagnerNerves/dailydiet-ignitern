import { Container, Logo, Photo } from './styles'

export function Header() {
  return (
    <Container>
      <Logo />
      <Photo source={{ uri: 'https://github.com/VagnerNerves.png' }} />
    </Container>
  )
}
