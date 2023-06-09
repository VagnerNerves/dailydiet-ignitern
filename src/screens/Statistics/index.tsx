import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { HeaderNavigate } from '@components/HeaderNavigate'

import {
  Container,
  ContainerCard,
  ContainerCardColumn,
  ContainerStatistics,
  Title
} from './styles'

import { CardStatistic } from '@components/CardStatistic'
import { StatisticsStorageDTO } from '@storage/statistics/statisticsStorageDTO'
import { statisticsGet } from '@storage/statistics/statisticsGet'

export function Statistics() {
  const [statistics, setStatistics] = useState<StatisticsStorageDTO>()

  async function fetchStatistics() {
    try {
      const dataStatistics: StatisticsStorageDTO = await statisticsGet()

      if (dataStatistics) {
        setStatistics(dataStatistics)
      }
    } catch (error) {
      console.log(error)
      Alert.alert('Estatísticas', 'Não foi possível buscar as estatísticas.')
    }
  }

  useEffect(() => {
    fetchStatistics()
  }, [])

  if (!statistics) {
    return []
  }

  return (
    <Container isDiet={statistics.dietIsOk}>
      <HeaderNavigate
        title={`${statistics.percentageDiet.toFixed(2)}%`}
        description="das refeições dentro da dieta"
        type="statistic"
        color={statistics.dietIsOk ? 'green' : 'red'}
      />

      <ContainerStatistics>
        <Title>Estatísticas Gerais</Title>

        <ContainerCard>
          <CardStatistic
            title={statistics.bestDietSequence.toString()}
            description="melhor sequência de pratos dentro da dieta"
          />

          <CardStatistic
            title={statistics.totalMeal.toString()}
            description="refeições registradas"
          />

          <ContainerCardColumn>
            <CardStatistic
              title={statistics.totalMealIsOnDiet.toString()}
              description="refeições dentro da dieta"
              colorCard="green"
              isFlex1
            />
            <CardStatistic
              title={statistics.totalMealIsNotOnDiet.toString()}
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
