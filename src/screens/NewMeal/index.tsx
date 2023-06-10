import { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

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

export function NewMeal() {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [date, setDate] = useState<Date>()
  const [hour, setHour] = useState<Date>()
  const [selectOnDiet, setSelectOnDiet] = useState<TYPE_OPTIONS_SELECT>('')

  const navigation = useNavigation()

  async function handleNewMeal() {
    try {
      if (name.trim().length === 0) {
        return Alert.alert('Cadastrar refeição', 'Informe o Nome da refeição.')
      }

      if (description.trim().length === 0) {
        return Alert.alert(
          'Cadastrar refeição',
          'Informe a Descrição da refeição.'
        )
      }

      if (!date) {
        return Alert.alert('Cadastrar refeição', 'Informe a Data da refeição.')
      }

      const dateNow = new Date()
      if (date > dateNow) {
        return Alert.alert(
          'Cadastrar refeição',
          'Informe uma data atual ou anterior.'
        )
      }

      if (!hour) {
        return Alert.alert('Cadastrar refeição', 'Informe a Hora da refeição.')
      }

      if (selectOnDiet === '') {
        return Alert.alert(
          'Cadastrar refeição',
          'Informe se a refeição está dentro da dieta.'
        )
      }

      const isOnDiet = selectOnDiet === '1' ? true : false

      const dataMeal: MealStorageDTO = {
        id: uuid.v4().toString(),
        name: name.trim(),
        description: description.trim(),
        date,
        hour,
        isOnDiet
      }

      await mealCreate(dataMeal)

      navigation.navigate('newmealfeedback', { isOnDiet })
    } catch (error) {
      console.log(error)
      Alert.alert('Cadastrar refeição', 'Não foi possível cadastrar a refeição')
    }
  }

  return (
    <Container>
      <HeaderNavigate title="Nova refeição" />

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
          title="Cadastrar refeição"
          typeButtons="solid"
          onPress={handleNewMeal}
        />
      </ContainerNewMeal>
    </Container>
  )
}
