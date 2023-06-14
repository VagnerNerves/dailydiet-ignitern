import {
  Container,
  ContainerButtons,
  ContainerModal,
  ContainerOptions,
  Title
} from './styles'

import { Button } from '@components/Button/Button'

interface ModalOptionsProps {
  visible: boolean
  setVisible: () => void
  message: string
  titleCancelButton: string
  titleOKButton: string
  onHandleOk: () => void
}

export function ModalOptions({
  visible,
  setVisible,
  message,
  titleCancelButton,
  titleOKButton,
  onHandleOk
}: ModalOptionsProps) {
  return (
    <ContainerModal
      animationType="fade"
      transparent={true}
      visible={visible}
      statusBarTranslucent
    >
      <Container>
        <ContainerOptions>
          <Title>{message}</Title>
          <ContainerButtons>
            <Button
              title={titleCancelButton}
              typeButtons="outline"
              style={{ flex: 1 }}
              onPress={setVisible}
            />
            <Button
              title={titleOKButton}
              typeButtons="solid"
              style={{ flex: 1 }}
              onPress={onHandleOk}
            />
          </ContainerButtons>
        </ContainerOptions>
      </Container>
    </ContainerModal>
  )
}
