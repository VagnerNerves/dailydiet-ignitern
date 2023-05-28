import styled, { css } from 'styled-components/native'

export type TypeButton = 'solid' | 'outline'

interface typeButton {
  type: TypeButton
}

export const ContainerButton = styled.TouchableOpacity<typeButton>`
  width: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;

  ${props => css`
    background-color: ${props.type === 'solid'
      ? props.theme.COLORS['gray-200']
      : props.theme.COLORS['gray-700']};

    border-width: 1px;
    border-color: ${props.type === 'solid'
      ? props.theme.COLORS['gray-200']
      : props.theme.COLORS['gray-100']};
  `}

  padding: 16px 24px;
  border-radius: 6px;
`

export const Title = styled.Text<typeButton>`
  ${props => css`
    font-family: ${props.theme.FONT_FAMILY.bold};
    font-size: ${props.theme.FONT_SIZE.bodyS}px;
    color: ${props.type === 'solid'
      ? props.theme.COLORS.white
      : props.theme.COLORS['gray-100']};
  `}
`
