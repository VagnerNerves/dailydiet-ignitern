import { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import {
  Container,
  ContainerDescription,
  ContainerFeedback,
  Description,
  Logo,
  Title
} from './styles'

import { Button } from '@components/Button/Button'

import imgIsDiet from '@assets/isdiet.png'
import imgIsNotDiet from '@assets/isnotdiet.png'

interface RouteParams {
  isOnDiet: boolean
}

export function NewMealFeedback() {
  const navigation = useNavigation()
  const route = useRoute()

  const { isOnDiet } = route.params as RouteParams

  return (
    <Container>
      <ContainerFeedback>
        {isOnDiet ? (
          <>
            <Title color="green">Continue assim!</Title>
            <ContainerDescription>
              <Description isBold={false}>
                Você continua{' '}
                <Description isBold={true}>dentro da dieta. </Description> Muito
                bem!
              </Description>
            </ContainerDescription>
          </>
        ) : (
          <>
            <Title color="red">Que pena!</Title>
            <ContainerDescription>
              <Description isBold={false}>
                Você <Description isBold={true}>saiu da dieta </Description>
                dessa vez, mas continue se esforçando e não desista!
              </Description>
            </ContainerDescription>
          </>
        )}
      </ContainerFeedback>

      <Logo source={isOnDiet ? imgIsDiet : imgIsNotDiet} />

      <Button
        title="Ir para a página inicial"
        typeButtons="solid"
        style={{ width: undefined }}
        onPress={() => navigation.navigate('home')}
      />
    </Container>
  )
}
