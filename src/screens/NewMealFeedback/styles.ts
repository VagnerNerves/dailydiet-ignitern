import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.COLORS['gray-700']};
`

export const ContainerFeedback = styled.View`
  width: 100%;
  gap: 8px;

  padding: 0px 32px;
  margin-bottom: 40px;
`

interface TitleProps {
  color: 'green' | 'red'
}
export const Title = styled.Text<TitleProps>`
  text-align: center;

  ${props => css`
    font-family: ${props.theme.FONT_FAMILY.bold};
    font-size: ${props.theme.FONT_SIZE.titleM}px;
    color: ${props.color === 'green'
      ? props.theme.COLORS['green-dark']
      : props.theme.COLORS['red-dark']};
  `}
`

export const ContainerDescription = styled.View`
  width: 100%;

  flex-direction: row;

  align-items: center;
  justify-content: center;
`

interface DescriptionProps {
  isBold: boolean
}
export const Description = styled.Text<DescriptionProps>`
  text-align: center;

  ${props => css`
    font-family: ${props.isBold
      ? props.theme.FONT_FAMILY.bold
      : props.theme.FONT_FAMILY.regular};
    font-size: ${props.theme.FONT_SIZE.bodyM}px;
    color: ${props.theme.COLORS['gray-100']};
  `}
`

export const Logo = styled.Image`
  width: 224px;
  height: 288px;

  margin-bottom: 32px;
`
