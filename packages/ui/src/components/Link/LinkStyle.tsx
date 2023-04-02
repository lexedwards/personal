import { PropsWithChildren } from 'react'

export const LinkStyle = ({ children }: PropsWithChildren<{}>) => {
  return (
    <span className="underline decoration-dashed blue-grey-900">
      {children}
    </span>
  )
}
