import { PropsWithChildren, ReactElement } from 'react'
import { ToastBlank, ToastBlankProps } from './ToastBlank'

export interface ToastProps extends ToastBlankProps {
  /**
   * Optionally provide a styled title
   */
  title?: string
}

export const Toast = ({
  children,
  onClose,
  title,
}: PropsWithChildren<ToastProps>) => {
  return (
    <ToastBlank onClose={onClose}>
      {title ? (
        <div className="my-2">
          <span className="text-base">{title}</span>
        </div>
      ) : null}
      <div className="my-2 text-xs font-bold">{children}</div>
    </ToastBlank>
  )
}
