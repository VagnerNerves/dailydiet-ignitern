import styled, { css } from 'styled-components/native'
import { ArrowUpRight } from 'phosphor-react-native'

export type TypeCard = 'default' | 'navigate'

export const COLORS_CARD = {
  gray: 'gray-600',
  green: 'green-light',
  red: 'red-light'
} as const

interface ContainerProps {
  colorCard: keyof typeof COLORS_CARD
}
export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  border-radius: 8px;
  padding: 20px 16px;

  background-color: ${props =>
    props.theme.COLORS[COLORS_CARD[props.colorCard]]};

  justify-content: center;
  align-items: center;

  position: relative;
`

interface TextProps {
  typeCard: TypeCard
}
export const Title = styled.Text<TextProps>`
  ${props => css`
    color: ${props.theme.COLORS['gray-100']};

    font-size: ${props.typeCard === 'default'
      ? props.theme.FONT_SIZE.titleM
      : props.theme.FONT_SIZE.titleG}px;

    font-family: ${props.theme.FONT_FAMILY.bold};
  `}
`

export const Description = styled.Text<TextProps>`
  ${props => css`
    color: ${props.theme.COLORS['gray-200']};
    font-size: ${props.theme.FONT_SIZE.bodyS}px;
    font-family: ${props.theme.FONT_FAMILY.regular};

    margin-top: ${props.typeCard === 'default' ? 8 : 2}px;
  `}
`

export const ButtonArrowUpRight = styled(ArrowUpRight)`
  position: absolute;
  top: 8px;
  right: 8px;
`
