import styled from 'styled-components/native'

interface ContainerProps {
  colors: 'default' | 'green' | 'red'
}

const COLORS_THEME = {
  default: 'gray-700',
  green: 'green-light',
  red: 'red-light'
} as const

export const Container = styled.View<ContainerProps>`
  flex: 1;

  background-color: ${props => props.theme.COLORS[COLORS_THEME[props.colors]]};
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
