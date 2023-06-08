import { TouchableOpacityProps, StyleProp, ViewStyle } from 'react-native'
import { useTheme } from 'styled-components/native'
import {
  ButtonArrowUpRight,
  Container,
  Description,
  Title,
  TypeCard,
  COLORS_CARD
} from './styles'

const COLORS_ARROW = {
  gray: 'gray-200',
  green: 'green-dark',
  red: 'red-dark'
} as const

interface CardStatisticProps extends TouchableOpacityProps {
  title: string
  description: string
  typeCard?: TypeCard
  colorCard?: keyof typeof COLORS_CARD
  isFlex1?: boolean
  style?: StyleProp<ViewStyle>
  onPress?: () => void
}

export function CardStatistic({
  title,
  description,
  typeCard = 'default',
  colorCard = 'gray',
  isFlex1 = false,
  style,
  onPress
}: CardStatisticProps) {
  const { COLORS } = useTheme()

  return (
    <Container
      colorCard={colorCard}
      disabled={typeCard === 'default'}
      isFlex1={isFlex1}
      style={style}
      onPress={onPress}
    >
      {typeCard === 'navigate' && (
        <ButtonArrowUpRight size={24} color={COLORS[COLORS_ARROW[colorCard]]} />
      )}

      <Title typeCard={typeCard}>{title}</Title>
      <Description typeCard={typeCard}>{description}</Description>
    </Container>
  )
}
