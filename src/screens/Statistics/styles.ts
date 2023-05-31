import styled from 'styled-components/native'

interface ContainerProps {
  isDiet: Boolean
}

export const Container = styled.View<ContainerProps>`
  flex: 1;

  background-color: ${props =>
    props.isDiet
      ? props.theme.COLORS['green-mid']
      : props.theme.COLORS['red-mid']};
`

export const ContainerStatistics = styled.View`
  flex: 1;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${props => props.theme.COLORS['gray-700']};

  padding: 33px 24px;
`

export const Title = styled.Text`
  text-align: center;

  font-family: ${props => props.theme.FONT_FAMILY.bold};
  font-size: ${props => props.theme.FONT_SIZE.bodyS}px;
  color: ${props => props.theme.COLORS['gray-100']};

  margin-bottom: 23px;
`

export const ContainerCard = styled.View`
  gap: 12px;
`

export const ContainerCardColumn = styled.View`
  width: 100%;
  flex-direction: row;

  gap: 12px;
`