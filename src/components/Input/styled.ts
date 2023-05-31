import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  gap: 4px;
`

export const Label = styled.Text`
  ${props => css`
    font-family: ${props.theme.FONT_FAMILY.bold};
    font-size: ${props.theme.FONT_SIZE.titleXS}px;
    color: ${props.theme.COLORS['gray-200']};
  `}
`

export const InputText = styled.TextInput`
  width: 100%;

  border-width: 1px;
  border-color: ${props => props.theme.COLORS['gray-500']};
  border-radius: 6px;

  padding: 14px;

  ${props => css`
    font-family: ${props.theme.FONT_FAMILY.regular};
    font-size: ${props.theme.FONT_SIZE.bodyM}px;
    color: ${props.theme.COLORS['gray-100']};
  `}
`
