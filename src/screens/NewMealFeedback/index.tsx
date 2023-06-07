import { useState } from 'react'
import { Button } from '@components/Button/Button'
import {
  Container,
  ContainerDescription,
  ContainerFeedback,
  Description,
  Logo,
  Title
} from './styles'

import imgIsDiet from '@assets/isdiet.png'
import imgIsNotDiet from '@assets/isnotdiet.png'

export function NewMealFeedback() {
  const [isDiet, setISDiet] = useState<boolean>(false)

  return (
    <Container>
      <ContainerFeedback>
        {isDiet ? (
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

      <Logo source={isDiet ? imgIsDiet : imgIsNotDiet} />

      <Button
        title="Ir para a página inicial"
        typeButtons="solid"
        style={{ width: undefined }}
      />
    </Container>
  )
}
