import styled, { css } from 'styled-components/native'

export const ContainerModal = styled.Modal``

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.25);

  padding: 24px;
`

export const ContainerOptions = styled.View`
  width: 100%;

  padding: 40px 24px 24px 24px;

  gap: 32px;

  background-color: ${props => props.theme.COLORS['gray-700']};

  border-radius: 8px;
`

export const Title = styled.Text`
  width: 100%;
  text-align: center;

  ${props => css`
    font-family: ${props.theme.FONT_FAMILY.bold};
    font-size: ${props.theme.FONT_SIZE.titleS}px;
    color: ${props.theme.COLORS['gray-200']};
  `}
`

export const ContainerButtons = styled.View`
  width: 100%;

  flex-direction: row;
  gap: 12px;
`
