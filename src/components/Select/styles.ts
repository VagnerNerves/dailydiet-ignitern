import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  gap: 8px;
`

export const Label = styled.Text`
  ${props => css`
    font-family: ${props.theme.FONT_FAMILY.bold};
    font-size: ${props.theme.FONT_SIZE.titleXS}px;
    color: ${props.theme.COLORS['gray-200']};
  `}
`

export const ContainerOptions = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 8px;
`

interface ButtonProps {
  selected: boolean
  color: 'green' | 'red'
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${props =>
    props.selected === true
      ? props.color === 'green'
        ? css`
            background-color: ${props => props.theme.COLORS['green-light']};
            border-color: ${props => props.theme.COLORS['green-dark']};
          `
        : css`
            background-color: ${props => props.theme.COLORS['red-light']};
            border-color: ${props => props.theme.COLORS['red-dark']};
          `
      : css`
          background-color: ${props => props.theme.COLORS['gray-600']};
          border-color: ${props => props.theme.COLORS['gray-600']};
        `}

  border-radius: 6px;
  border-width: 1px;

  padding: 16px;
`

export const TitleOptions = styled.Text`
  ${props => css`
    font-family: ${props.theme.FONT_FAMILY.bold};
    font-size: ${props.theme.FONT_SIZE.titleXS}px;
    color: ${props.theme.COLORS['gray-100']};
  `}
`

interface CircleProps {
  color: 'green' | 'red'
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
