import { HeaderNavigate } from '@components/HeaderNavigate'
import {
  Container,
  ContainerData,
  ContainerInfo,
  ContainerViewMeal,
  TextDefault,
  Title
} from './styles'
import { Button } from '@components/Button/Button'
import { Tag } from '@components/Tag'

export function ViewMeal() {
  return (
    <Container isDiet={true}>
      <HeaderNavigate title="Refeição" />
      <ContainerViewMeal>
        <ContainerData showsVerticalScrollIndicator={false}>
          <ContainerInfo>
            <Title size="20">Sanduíche</Title>
            <TextDefault>
              Sanduíche de pão integral com atum e salada de alface e tomate
            </TextDefault>
          </ContainerInfo>

          <ContainerInfo>
            <Title size="14">Sanduíche</Title>
            <TextDefault>12/08/2022 às 16:00</TextDefault>
          </ContainerInfo>

          <ContainerInfo>
            <Tag title="dentro da dieta" color="green" />
          </ContainerInfo>
        </ContainerData>

        <Button title="Editar refeição" typeButtons="solid" icon="pencil" />
        <Button title="Excluir refeição" typeButtons="outline" icon="trash" />
      </ContainerViewMeal>
    </Container>
  )
}
