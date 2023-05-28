import { Text, SectionList, View } from 'react-native'

import { Container, Title } from './styles'

import { Header } from '@components/Header'
import { CardStatistic } from '@components/CardStatistic'
import { Button } from '@components/Button/Button'

export function Home() {
  return (
    <Container>
      <Header />

      <CardStatistic
        typeCard="navigate"
        colorCard="green"
        title="90,86%"
        description="das refeições dentro da dieta"
        style={{ marginBottom: 40 }}
      />

      <Title>Refeições</Title>

      <Button title="Nova refeição" typeButtons="solid" icon="plus" />
    </Container>
  )
}
