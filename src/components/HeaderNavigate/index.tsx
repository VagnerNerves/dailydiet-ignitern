import { useNavigation } from '@react-navigation/native'

import { ArrowLeft } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { ButtonBack, Container, Description, Title, TypeHeader } from './styles'

const COLORS_ARROW = {
  default: 'gray-200',
  green: 'green-dark',
  red: 'red-dark'
} as const

interface HeaderNavigateProps {
  title: string
  description?: string
  type?: TypeHeader
  color?: 'default' | 'green' | 'red'
  onPress?: () => void
}

export function HeaderNavigate({
  title,
  description,
  type = 'default',
  color = 'default',
  onPress
}: HeaderNavigateProps) {
  const { COLORS } = useTheme()
  const navigation = useNavigation()

  return (
    <Container type={type}>
      <Title type={type}>{title}</Title>
      {description && <Description>{description}</Description>}

      <ButtonBack onPress={onPress ? onPress : () => navigation.goBack()}>
        <ArrowLeft size={24} color={COLORS[COLORS_ARROW[color]]} />
      </ButtonBack>
    </Container>
  )
}
