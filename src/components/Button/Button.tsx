import { Button as ButtonMUI, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ButtonProps } from './types'

const StyledButton = styled(ButtonMUI)(({ theme = useTheme() }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.dark,
  fontFamily: theme.typography.fontFamily,
}))

const Button = ({ label }: ButtonProps) => {
  return (
    <StyledButton
      variant="contained"
      onClick={() => console.log('CUSTOM BUTTON')}
    >
      {label}
    </StyledButton>
  )
}

export { Button, type ButtonProps }
