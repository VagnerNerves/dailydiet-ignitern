import {
  Container,
  ContainerCard,
  ContainerCardColumn,
  ContainerStatistics,
  Title
} from './styles'

import { HeaderNavigate } from '@components/HeaderNavigate'
import { CardStatistic } from '@components/CardStatistic'
import { Button } from '@components/Button/Button'
import { Text } from 'react-native'

export function Statistics() {
  return (
    <Container isDiet={true}>
      <HeaderNavigate
        title="90,86%"
        description="das refeições dentro da dieta"
        type="statistic"
        color="green"
      />

      <ContainerStatistics>
        <Title>Estatísticas Gerais</Title>

        <ContainerCard>
          <CardStatistic
            title="22"
            description="melhor sequência de pratos dentro da dieta"
          />

          <CardStatistic title="109" description="refeições registradas" />

          <ContainerCardColumn>
            <CardStatistic
              title="109"
              description="refeições dentro da dieta"
              colorCard="green"
              isFlex1
            />
            <CardStatistic
              title="109"
              description="refeições fora da dieta"
              colorCard="red"
              isFlex1
            />
          </ContainerCardColumn>
        </ContainerCard>
      </ContainerStatistics>
    </Container>
  )
}
