import { useState, useCallback } from 'react'
import { SectionList, Alert } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { Container, DateMeal, Title } from './styles'

import { Header } from '@components/Header'
import { CardStatistic } from '@components/CardStatistic'
import { Button } from '@components/Button/Button'
import { CardMeal } from '@components/CardMeal'

import { StatisticsStorageDTO } from '@storage/statistics/statisticsStorageDTO'
import { statisticsGet } from '@storage/statistics/statisticsGet'

export function Home() {
  const [statistics, setStatistics] = useState<StatisticsStorageDTO>()

  const DataMeal = [
    {
      title: '12.08.22',
      data: [
        {
          id: 1,
          dateFormatted: '12.08.22',
          hourFormatted: '20:00',
          nameMeal: 'X-tudo',
          isDiet: false
        },
        {
          id: 2,
          dateFormatted: '12.08.22',
          hourFormatted: '16:00',
          nameMeal: 'Whey protein com leite',
          isDiet: true
        }
      ]
    },
    {
      title: '11.08.22',
      data: [
        {
          id: 3,
          dateFormatted: '12.08.22',
          hourFormatted: '20:00',
          nameMeal: 'X-tudo',
          isDiet: false
        },
        {
          id: 4,
          dateFormatted: '12.08.22',
          hourFormatted: '16:00',
          nameMeal: 'Whey protein com leite',
          isDiet: true
        },
        {
          id: 5,
          dateFormatted: '12.08.22',
          hourFormatted: '12:00',
          nameMeal: 'Salada cesar com frango pessado e exatamente correto',
          isDiet: true
        }
      ]
    },
    {
      title: '10.08.22',
      data: [
        {
          id: 3,
          dateFormatted: '12.08.22',
          hourFormatted: '20:00',
          nameMeal: 'X-tudo',
          isDiet: false
        },
        {
          id: 4,
          dateFormatted: '12.08.22',
          hourFormatted: '16:00',
          nameMeal: 'Whey protein com leite',
          isDiet: true
        },
        {
          id: 5,
          dateFormatted: '12.08.22',
          hourFormatted: '12:00',
          nameMeal: 'Salada cesar com frango pessado e exatamente correto',
          isDiet: true
        }
      ]
    }
  ]

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

  useFocusEffect(
    useCallback(() => {
      fetchStatistics()
    }, [])
  )

  return (
    <Container>
      <Header />

      {statistics && (
        <CardStatistic
          typeCard="navigate"
          colorCard={statistics.dietIsOk ? 'green' : 'red'}
          title={`${statistics.percentageDiet.toFixed(2)}%`}
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

      <SectionList
        sections={DataMeal}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <CardMeal
            id={item.id.toString()}
            hour={item.hourFormatted}
            nameMeal={item.nameMeal}
            isDiet={item.isDiet}
            onPress={() => handleViewMeal(item.id.toString())}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <DateMeal>{title}</DateMeal>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 50 }]}
      />
    </Container>
  )
}
