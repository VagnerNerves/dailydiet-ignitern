import { useTheme } from 'styled-components/native'
import { Plus, PencilSimpleLine, Trash } from 'phosphor-react-native'
import { ContainerButton, Title, TypeButton } from './styles'

interface ButtonProps {
  title: string
  typeButtons: TypeButton
  icon?: 'plus' | 'pencil' | 'trash'
}

export function Button({ title, typeButtons, icon }: ButtonProps) {
  const { COLORS } = useTheme()

  return (
    <ContainerButton activeOpacity={0.5} type={typeButtons}>
      {icon === 'plus' && (
        <Plus
          size={18}
          color={typeButtons === 'solid' ? COLORS.white : COLORS['gray-100']}
        />
      )}
      {icon === 'pencil' && (
        <PencilSimpleLine
          size={18}
          color={typeButtons === 'solid' ? COLORS.white : COLORS['gray-100']}
        />
      )}
      {icon === 'trash' && (
        <Trash
          size={18}
          color={typeButtons === 'solid' ? COLORS.white : COLORS['gray-100']}
        />
      )}
      <Title type={typeButtons}>{title}</Title>
    </ContainerButton>
  )
}