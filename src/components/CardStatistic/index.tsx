import { TouchableOpacityProps } from 'react-native'
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
}

export function CardStatistic({
  title,
  description,
  typeCard = 'default',
  colorCard = 'gray',
  isFlex1 = false,
  ...rest
}: CardStatisticProps) {
  const { COLORS } = useTheme()

  return (
    <Container
      colorCard={colorCard}
      disabled={typeCard === 'default'}
      isFlex1={isFlex1}
      {...rest}
    >
      {typeCard === 'navigate' && (
        <ButtonArrowUpRight size={24} color={COLORS[COLORS_ARROW[colorCard]]} />
      )}

      <Title typeCard={typeCard}>{title}</Title>
      <Description typeCard={typeCard}>{description}</Description>
    </Container>
  )
}
