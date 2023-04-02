import { PropsWithChildren } from 'react'

export const ButtonStyle = ({ children }: PropsWithChildren<{}>) => {
  return (
    <span className="inline-block border-none p-2 bg-slate-50">{children}</span>
  )
}
