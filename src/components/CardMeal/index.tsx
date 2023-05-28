import { Text, View } from 'react-native'
import { ContainerButton, Divider, Hour, NameMeal, Status } from './styles'

interface CardMealProps {
  id: string
  hour: string
  nameMeal: string
  isDiet: Boolean
}

export function CardMeal({ id, hour, nameMeal, isDiet }: CardMealProps) {
  return (
    <ContainerButton>
      <Hour>{hour}</Hour>
      <Divider />
      <NameMeal numberOfLines={1}>{nameMeal}</NameMeal>
      <Status isDiet={isDiet} />
    </ContainerButton>
  )
}
