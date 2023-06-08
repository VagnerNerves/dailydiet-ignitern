import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;

  padding: 0 24px;
  background-color: ${props => props.theme.COLORS['gray-700']};
`

export const Title = styled.Text`
  ${props => css`
    font-family: ${props.theme.FONT_FAMILY.regular};
    font-size: ${props.theme.FONT_SIZE.bodyM}px;

    color: ${props.theme.COLORS['gray-100']};

    margin-bottom: 8px;
  `}
`

export const DateMeal = styled.Text`
  ${props => css`
    font-family: ${props.theme.FONT_FAMILY.bold};
    font-size: ${props.theme.FONT_SIZE.titleS}px;

    color: ${props.theme.COLORS['gray-100']};
    margin-top: 32px;
  `}
`
