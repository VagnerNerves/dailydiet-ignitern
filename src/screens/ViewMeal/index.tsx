import { useEffect, useState } from 'react'
import { Alert } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'

import { format } from 'date-fns'

import {
  Container,
  ContainerData,
  ContainerInfo,
  ContainerViewMeal,
  TextDefault,
  Title
} from './styles'

import { HeaderNavigate } from '@components/HeaderNavigate'
import { Button } from '@components/Button/Button'
import { Tag } from '@components/Tag'

import { MealStorageDTO } from '@storage/meal/mealStorageDTO'

import { mealGet } from '@storage/meal/mealGet'
import { Loading } from '@components/Loading'
import { mealRemove } from '@storage/meal/mealRemove'

interface RouteParams {
  id: string
}

export function ViewMeal() {
  const navigation = useNavigation()
  const route = useRoute()

  const [meal, setMeal] = useState<MealStorageDTO>()

  const { id } = route.params as RouteParams

  async function handleRemoveMeal() {
    Alert.alert(
      'Excluir refeição',
      'Deseja realmente excluir o registro da refeição?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Sim, excluir',
          onPress: () => RemoveMeal()
        }
      ]
    )
  }

  async function RemoveMeal() {
    try {
      await mealRemove(id)

      navigation.navigate('home')
    } catch (error) {
      console.log(error)
      Alert.alert('Excluir Refeição', 'Não foi possível excluir a refeição.')
    }
  }

  async function featchSearchMeal() {
    try {
      const storageMeal = await mealGet(id)

      if (storageMeal) {
        setMeal(storageMeal)
      } else {
        navigation.navigate('home')
      }
    } catch (error) {
      console.log(error)
      Alert.alert('Buscar Refeição', 'Não foi possível buscar a refeição.')
    }
  }

  useEffect(() => {
    featchSearchMeal()
  }, [])

  if (!meal) {
    return <Loading />
  }

  return (
    <Container isDiet={meal.isOnDiet}>
      <HeaderNavigate title="Refeição" />
      <ContainerViewMeal>
        <ContainerData showsVerticalScrollIndicator={false}>
          <ContainerInfo>
            <Title size="20">{meal.name}</Title>
            <TextDefault>{meal.description}</TextDefault>
          </ContainerInfo>

          <ContainerInfo>
            <Title size="14">Data e Hora</Title>
            <TextDefault>{`${format(
              new Date(meal.date),
              "dd'/'MM'/'yyyy"
            )} às ${format(new Date(meal.hour), "HH':'mm")}`}</TextDefault>
          </ContainerInfo>

          <ContainerInfo>
            <Tag
              title={meal.isOnDiet ? 'dentro da dieta' : 'fora da dieta'}
              color={meal.isOnDiet ? 'green' : 'red'}
            />
          </ContainerInfo>
        </ContainerData>

        <Button title="Editar refeição" typeButtons="solid" icon="pencil" />
        <Button
          title="Excluir refeição"
          typeButtons="outline"
          icon="trash"
          onPress={handleRemoveMeal}
        />
      </ContainerViewMeal>
    </Container>
  )
}
