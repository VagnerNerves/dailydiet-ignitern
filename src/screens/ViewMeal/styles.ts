import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface ContainerProps {
  isDiet: Boolean
}
export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;

  background-color: ${props =>
    props.isDiet
      ? props.theme.COLORS['green-light']
      : props.theme.COLORS['red-light']};
`

export const ContainerViewMeal = styled.View`
  flex: 1;
  gap: 9px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${props => props.theme.COLORS['gray-700']};

  padding: 40px 24px;
`

export const ContainerData = styled.ScrollView``

export const ContainerInfo = styled.View`
  width: 100%;

  gap: 8px;
  margin-bottom: 24px;
`

interface TitleProps {
  size: '14' | '20'
}
export const Title = styled.Text<TitleProps>`
  ${props => css`
    font-family: ${props.theme.FONT_FAMILY.bold};
    font-size: ${props.size === '20'
      ? props.theme.FONT_SIZE.title20
      : props.theme.FONT_SIZE.titleXS}px;
    color: ${props.theme.COLORS['gray-100']};
  `}
`

export const TextDefault = styled.Text`
  ${props => css`
    font-family: ${props.theme.FONT_FAMILY.regular};
    font-size: ${props.theme.FONT_SIZE.bodyM}px;
    color: ${props.theme.COLORS['gray-200']};
  `}
`
