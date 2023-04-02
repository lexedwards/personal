import { ButtonHTMLAttributes } from 'react'

export const ButtonBlank = ({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const classes = `border-none bg-none p-0 m-0 inline-grid place-items-center cursor-pointer [@media(pointer:coarse)]:min-w-[44px] [@media(pointer:coarse)]:min-h-[44px] [@media(pointer:coarse)]:m-4 ${
    className ? ` ${className}` : ''
  }`

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
