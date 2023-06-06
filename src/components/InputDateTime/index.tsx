import { useState } from 'react'

import { Button, Container, Label, TextButton } from './styles'

import DateTimePickerModal from 'react-native-modal-datetime-picker'

import { format } from 'date-fns'

interface InputDateTimeProps {
  mode: 'date' | 'time'
  value: Date | undefined
  onChangeValue: (date: Date) => void
  label?: string
  isFlex1?: boolean
}

export function InputDateTime({
  mode,
  value,
  onChangeValue,
  label,
  isFlex1 = false
}: InputDateTimeProps) {
  const [openModal, setOpenModal] = useState<boolean>(false)

  function handleConfirm(date: Date) {
    setOpenModal(false)
    onChangeValue(date)
  }

  return (
    <Container isFlex1={isFlex1}>
      {label && <Label>{label}</Label>}
      <Button activeOpacity={0.8} onPress={() => setOpenModal(!openModal)}>
        <TextButton>
          {value
            ? mode === 'date'
              ? format(value, "dd'/'MM'/'yyyy")
              : format(value, "HH':'mm")
            : ''}
        </TextButton>
      </Button>

      <DateTimePickerModal
        isVisible={openModal}
        mode={mode}
        locale="pt_BR"
        is24Hour={true}
        display="spinner"
        date={value ? value : new Date()}
        onConfirm={handleConfirm}
        onCancel={item => setOpenModal(false)}
      />
    </Container>
  )
}
