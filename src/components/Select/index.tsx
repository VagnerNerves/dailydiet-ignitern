import {
  Button,
  Circle,
  Container,
  ContainerOptions,
  Label,
  TitleOptions
} from './styles'

export type TYPE_OPTIONS_SELECT = '' | '1' | '2'

interface SelectProps {
  option1: string
  option2: string
  value: TYPE_OPTIONS_SELECT
  onChangeValue: (value: TYPE_OPTIONS_SELECT) => void
  label?: string
}

export function Select({
  option1,
  option2,
  value = '',
  onChangeValue,
  label
}: SelectProps) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <ContainerOptions>
        <Button
          color="green"
          selected={value === '1' ? true : false}
          onPress={() => onChangeValue('1')}
        >
          <Circle color="green" />
          <TitleOptions>{option1}</TitleOptions>
        </Button>
        <Button
          color="red"
          selected={value === '2' ? true : false}
          onPress={() => onChangeValue('2')}
        >
          <Circle color="red" />
          <TitleOptions>{option2}</TitleOptions>
        </Button>
      </ContainerOptions>
    </Container>
  )
}
