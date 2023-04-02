import { AnchorHTMLAttributes } from 'react'

export const LinkBlank = ({
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const classes = `text-decoration-none cursor-pointer${
    className ? ` ${className}` : ''
  }`

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  )
}
