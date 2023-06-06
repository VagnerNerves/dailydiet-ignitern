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
import { useState } from 'react'
import { Select, TYPE_OPTIONS_SELECT } from '@components/Select'

export function NewMeal() {
  const [inputDate, setInputDate] = useState<Date>()
  const [inputTime, setInputTime] = useState<Date>()
  const [select, setSelect] = useState<TYPE_OPTIONS_SELECT>('')

  return (
    <Container>
      <HeaderNavigate title="Nova refeição" />

      <ContainerNewMeal>
        <ContainerForm>
          <Input label="Nome" />
          <Input
            label="Descrição"
            style={{ height: 120 }}
            multiline
            textAlignVertical="top"
          />

          <ContainerDateAndTime>
            <InputDateTime
              mode="date"
              label="Data"
              value={inputDate}
              onChangeValue={setInputDate}
              isFlex1
            />
            <InputDateTime
              mode="time"
              label="Hora"
              value={inputTime}
              onChangeValue={setInputTime}
              isFlex1
            />
          </ContainerDateAndTime>

          <Select
            label="Está dentro da dieta?"
            option1="Sim"
            option2="Não"
            value={select}
            onChangeValue={setSelect}
          />
        </ContainerForm>

        <Button title="Cadastrar refeição" typeButtons="solid" />
      </ContainerNewMeal>
    </Container>
  )
}
