import styled from 'styled-components/native'

import LogoDailyDiet from '@assets/logo-dailydiet.svg'

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 32px 0;
`

export const Logo = styled(LogoDailyDiet).attrs({
  width: 82,
  height: 37
})``

export const Photo = styled.Image`
  width: 40px;
  height: 40px;

  border: 2px;
  border-color: ${props => props.theme.COLORS['gray-100']};
  border-radius: 999px;
`
