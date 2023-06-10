import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  ContainerCard,
  ContainerCardColumn,
  ContainerStatistics,
  Title
} from './styles'

import { HeaderNavigate } from '@components/HeaderNavigate'
import { CardStatistic } from '@components/CardStatistic'
import { Loading } from '@components/Loading'

import { StatisticsStorageDTO } from '@storage/statistics/statisticsStorageDTO'
import { statisticsGet } from '@storage/statistics/statisticsGet'

export function Statistics() {
  const [isLoadingStatistics, setIsLoadingStatistics] = useState<boolean>(true)
  const [statistics, setStatistics] = useState<StatisticsStorageDTO>()

  const navigation = useNavigation()

  async function fetchStatistics() {
    try {
      const dataStatistics: StatisticsStorageDTO = await statisticsGet()

      if (dataStatistics) {
        setStatistics(dataStatistics)
      } else {
        navigation.navigate('home')
      }
    } catch (error) {
      console.log(error)
      Alert.alert('Estatísticas', 'Não foi possível buscar as estatísticas.')
      navigation.navigate('home')
    } finally {
      setIsLoadingStatistics(false)
    }
  }

  useEffect(() => {
    fetchStatistics()
  }, [])

  if (isLoadingStatistics || !statistics) {
    return <Loading />
  }

  return (
    <Container colors={statistics.dietIsOk ? 'green' : 'red'}>
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
