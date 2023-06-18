import { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import uuid from 'react-native-uuid'

import {
  Container,
  ContainerDateAndTime,
  ContainerForm,
  ContainerNewMeal
} from './styles'

import { HeaderNavigate } from '@components/HeaderNavigate'
import { Button } from '@components/Button/Button'
import { Input } from '@components/Input'
import { InputDateTime } from '@components/InputDateTime'

import { Select, TYPE_OPTIONS_SELECT } from '@components/Select'
import { MealStorageDTO } from '@storage/meal/mealStorageDTO'
import { mealCreate } from '@storage/meal/mealCreate'
import { mealGet } from '@storage/meal/mealGet'
import { mealUpdate } from '@storage/meal/mealUpdate'

interface RouteParams {
  id: string
}

export function NewMeal() {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [date, setDate] = useState<Date>()
  const [hour, setHour] = useState<Date>()
  const [selectOnDiet, setSelectOnDiet] = useState<TYPE_OPTIONS_SELECT>('')

  const navigation = useNavigation()
  const route = useRoute()

  const insets = useSafeAreaInsets()

  const { id } = route.params as RouteParams

  async function handleNewMeal() {
    try {
      const titleAlert = id ? 'Salvar alterações' : 'Cadastrar refeição'

      if (name.trim().length === 0) {
        return Alert.alert(titleAlert, 'Informe o Nome da refeição.')
      }

      if (description.trim().length === 0) {
        return Alert.alert(titleAlert, 'Informe a Descrição da refeição.')
      }

      if (!date) {
        return Alert.alert(titleAlert, 'Informe a Data da refeição.')
      }

      const dateNow = new Date()
      if (date > dateNow) {
        return Alert.alert(titleAlert, 'Informe uma data atual ou anterior.')
      }

      if (!hour) {
        return Alert.alert(titleAlert, 'Informe a Hora da refeição.')
      }

      if (selectOnDiet === '') {
        return Alert.alert(
          titleAlert,
          'Informe se a refeição está dentro da dieta.'
        )
      }

      const isOnDiet = selectOnDiet === '1' ? true : false

      const idMeal = id ? id : uuid.v4().toString()

      const dataMeal: MealStorageDTO = {
        id: idMeal,
        name: name.trim(),
        description: description.trim(),
        date,
        hour,
        isOnDiet
      }

      id ? await mealUpdate(dataMeal) : await mealCreate(dataMeal)

      navigation.navigate('newmealfeedback', { isOnDiet })
    } catch (error) {
      console.log(error)
      Alert.alert('Cadastrar refeição', 'Não foi possível cadastrar a refeição')
    }
  }

  async function fecthMeal() {
    try {
      const mealStorage = await mealGet(id)

      setName(mealStorage.name)
      setDescription(mealStorage.description)
      setDate(new Date(mealStorage.date))
      setHour(new Date(mealStorage.hour))
      setSelectOnDiet(mealStorage.isOnDiet ? '1' : '2')
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Editar Refeição',
        'Não foi possivel buscar os dados da refeição para edição.'
      )
    }
  }

  useEffect(() => {
    if (id) {
      fecthMeal()
    }
  }, [])

  return (
    <Container style={{ paddingTop: insets.top }}>
      <HeaderNavigate title={id ? 'Editar refeição' : 'Nova refeição'} />

      <ContainerNewMeal>
        <ContainerForm>
          <Input
            label="Nome"
            value={name}
            onChangeText={setName}
            maxLength={40}
          />
          <Input
            label="Descrição"
            value={description}
            onChangeText={setDescription}
            maxLength={300}
            style={{ height: 120 }}
            multiline
            textAlignVertical="top"
          />

          <ContainerDateAndTime>
            <InputDateTime
              mode="date"
              label="Data"
              value={date}
              onChangeValue={setDate}
              isFlex1
            />
            <InputDateTime
              mode="time"
              label="Hora"
              value={hour}
              onChangeValue={setHour}
              isFlex1
            />
          </ContainerDateAndTime>

          <Select
            label="Está dentro da dieta?"
            option1="Sim"
            option2="Não"
            value={selectOnDiet}
            onChangeValue={setSelectOnDiet}
          />
        </ContainerForm>

        <Button
          title={id ? 'Salvar alterações' : 'Cadastrar refeição'}
          typeButtons="solid"
          onPress={handleNewMeal}
        />
      </ContainerNewMeal>
    </Container>
  )
}
