import styled, { css } from 'styled-components/native'

export const ContainerButton = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  padding: 14px 16px 14px 12px;

  background-color: ${props => props.theme.COLORS['gray-700']};

  border-width: 1px;
  border-color: ${props => props.theme.COLORS['gray-500']};
  border-radius: 6px;

  margin-top: 8px;
`

export const Hour = styled.Text`
  ${props => css`
    font-family: ${props.theme.FONT_FAMILY.bold};
    font-size: ${props.theme.FONT_SIZE.bodyXS}px;
    color: ${props.theme.COLORS['gray-100']};
  `}
`

export const Divider = styled.Text`
  width: 0px;
  height: 14px;

  border-width: 1px;
  border-color: ${props => props.theme.COLORS['gray-400']};
`

export const NameMeal = styled.Text`
  flex: 1;

  ${props => css`
    font-family: ${props.theme.FONT_FAMILY.regular};
    font-size: ${props.theme.FONT_SIZE.bodyM}px;
    color: ${props.theme.COLORS['gray-200']};
  `}
`

interface StatusProps {
  isDiet: Boolean
}

export const Status = styled.Text<StatusProps>`
  width: 14px;
  height: 14px;

  background-color: ${props =>
    props.isDiet
      ? props.theme.COLORS['green-mid']
      : props.theme.COLORS['red-mid']};

  border-radius: 999px;
`
