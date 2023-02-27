import { ThemeProvider } from 'styled-components/native'
import { Diet } from './src/screens/Diet'
import theme from './src/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Diet />
    </ThemeProvider>
  )
}
