import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 8px;

  padding: 8px 16px;

  background-color: ${props => props.theme.COLORS['gray-600']};
  border-radius: 1000px;

  align-self: flex-start;
`
export type TYPE_COLOR = 'green' | 'red'

interface CircleProps {
  color: TYPE_COLOR
}
export const Circle = styled.View<CircleProps>`
  width: 8px;
  height: 8px;

  border-radius: 9999px;

  background-color: ${props =>
    props.color === 'green'
      ? props.theme.COLORS['green-dark']
      : props.theme.COLORS['red-dark']};
`

export const Title = styled.Text`
  font-family: ${props => props.theme.FONT_FAMILY.regular};
  font-size: ${props => props.theme.FONT_SIZE.bodyS}px;
  color: ${props => props.theme.COLORS['gray-100']};
`
