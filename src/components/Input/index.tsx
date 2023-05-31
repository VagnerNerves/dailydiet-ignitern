import { TextInputProps } from 'react-native'
import { Container, InputText, Label } from './styled'

interface InputProps extends TextInputProps {
  label?: string
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputText {...rest} />
    </Container>
  )
}
