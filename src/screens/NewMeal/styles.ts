import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  background-color: ${props => props.theme.COLORS['gray-500']};
`

export const ContainerNewMeal = styled.View`
  flex: 1;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${props => props.theme.COLORS['gray-700']};

  padding: 40px 24px;
`

export const ContainerForm = styled.View`
  flex: 1;
  gap: 24px;
`

export const ContainerDateAndTime = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 20px;
`
