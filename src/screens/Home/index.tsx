import { useState, useCallback } from 'react'
import { SectionList, Alert } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { format } from 'date-fns'

import { Container, ContainerEmpty, DateMeal, TextEmpty, Title } from './styles'

import { Header } from '@components/Header'
import { CardStatistic } from '@components/CardStatistic'
import { Button } from '@components/Button/Button'
import { CardMeal } from '@components/CardMeal'

import { StatisticsStorageDTO } from '@storage/statistics/statisticsStorageDTO'
import { ListMealStorageDTO } from '@storage/listmeal/listmealStorageDTO'

import { statisticsGet } from '@storage/statistics/statisticsGet'
import { listmealGet } from '@storage/listmeal/listmealGet'

export function Home() {
  const [statistics, setStatistics] = useState<StatisticsStorageDTO>()
  const [listMeal, setListMeal] = useState<ListMealStorageDTO[]>()

  const navigation = useNavigation()

  function handleSatistic() {
    navigation.navigate('statistics')
  }

  function handleNewMeal() {
    navigation.navigate('newmeal', { id: '' })
  }

  function handleViewMeal(id: string) {
    navigation.navigate('viewmeal', { id })
  }

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

  async function fetchListMeal() {
    try {
      const dataListMeal: ListMealStorageDTO[] = await listmealGet()

      if (dataListMeal) {
        setListMeal(dataListMeal)
      }
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Lista Refeições',
        'Não foi possível buscar a lista de refeições.'
      )
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchStatistics()
      fetchListMeal()
    }, [])
  )

  return (
    <Container>
      <Header />
      {statistics && statistics.totalMeal > 0 && (
        <CardStatistic
          typeCard="navigate"
          colorCard={statistics.dietIsOk ? 'green' : 'red'}
          title={`${
            statistics.percentageDiet
              ? statistics.percentageDiet.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })
              : 0
          }%`}
          description="das refeições dentro da dieta"
          style={{ marginBottom: 40 }}
          onPress={handleSatistic}
        />
      )}

      <Title>Refeições</Title>

      <Button
        title="Nova refeição"
        typeButtons="solid"
        icon="plus"
        onPress={handleNewMeal}
      />

      {listMeal && (
        <SectionList
          sections={listMeal}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <CardMeal
              id={item.id.toString()}
              hour={format(new Date(item.hour), "HH':'mm")}
              nameMeal={item.name}
              isDiet={item.isOnDiet}
              onPress={() => handleViewMeal(item.id)}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <DateMeal>{title}</DateMeal>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[{ paddingBottom: 50, flex: 1 }]}
          ListEmptyComponent={() => (
            <ContainerEmpty>
              <TextEmpty>Que tal cadastrar uma nova refeição?</TextEmpty>
            </ContainerEmpty>
          )}
        />
      )}
    </Container>
  )
}
