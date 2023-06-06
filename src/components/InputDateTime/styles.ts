import styled, { css } from 'styled-components/native'

interface ContainerProps {
  isFlex1: boolean
}
export const Container = styled.View<ContainerProps>`
  ${props =>
    props.isFlex1
      ? css`
          flex: 1;
        `
      : css`
          width: 100%;
        `}
  gap: 4px;
`

export const Label = styled.Text`
  ${props => css`
    font-family: ${props.theme.FONT_FAMILY.bold};
    font-size: ${props.theme.FONT_SIZE.titleXS}px;
    color: ${props.theme.COLORS['gray-200']};
  `}
`

export const Button = styled.TouchableOpacity`
  width: 100%;

  border-width: 1px;
  border-color: ${props => props.theme.COLORS['gray-500']};
  border-radius: 6px;

  padding: 14px;
`

export const TextButton = styled.Text`
  ${props => css`
    font-family: ${props.theme.FONT_FAMILY.regular};
    font-size: ${props.theme.FONT_SIZE.bodyM}px;
    color: ${props.theme.COLORS['gray-100']};
  `}
`
