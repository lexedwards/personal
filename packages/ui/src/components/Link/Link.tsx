import { AnchorHTMLAttributes } from 'react'
import { LinkStyle } from './LinkStyle'
import { LinkBlank } from './LinkBlank'

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const Link = ({ children, ...props }: LinkProps) => {
  return (
    <LinkBlank {...props}>
      <LinkStyle>{children}</LinkStyle>
    </LinkBlank>
  )
}
