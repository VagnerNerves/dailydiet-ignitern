import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import { ButtonArrowUpRight, Container, Description, Title } from './styles'

export type TypeCard = 'default' | 'navigate'

export const COLORS_CARD = {
  gray: 'gray-600',
  green: 'green-light',
  red: 'red-light'
} as const

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
}

export function CardStatistic({
  title,
  description,
  typeCard = 'default',
  colorCard = 'gray',
  ...rest
}: CardStatisticProps) {
  const { COLORS } = useTheme()

  return (
    <Container
      colorCard={colorCard}
      disabled={typeCard === 'default'}
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
