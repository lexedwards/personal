import { ButtonBlank } from './ButtonBlank'
import { ButtonStyle } from './ButtonStyle'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ButtonBlank {...props}>
      <ButtonStyle>{children}</ButtonStyle>
    </ButtonBlank>
  )
}
