import styled, { css } from 'styled-components/native'

export type TypeHeader = 'default' | 'statistic'

interface ContainerProps {
  type: TypeHeader
}

export const Container = styled.View<ContainerProps>`
  width: 100%;

  ${props => css`
    height: ${props.type === 'default' ? 75 : 140}px;
  `}

  justify-content: center;
  align-items: center;
`

export const Title = styled.Text<ContainerProps>`
  ${props => css`
    font-family: ${props.theme.FONT_FAMILY.bold};
    font-size: ${props.type === 'default'
      ? props.theme.FONT_SIZE.titleS
      : props.theme.FONT_SIZE.titleG}px;
    color: ${props.theme.COLORS['gray-100']};
  `}
`

export const Description = styled.Text`
  margin-top: 2px;

  font-family: ${props => props.theme.FONT_FAMILY.regular};
  font-size: ${props => props.theme.FONT_SIZE.bodyS}px;
  color: ${props => props.theme.COLORS['gray-200']};
`

export const ButtonBack = styled.TouchableOpacity`
  width: 24px;
  height: 24px;

  position: absolute;
  left: 0;
  top: 26;
`
