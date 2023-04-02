import { PropsWithChildren } from 'react'
import { ButtonBlank } from '../Button'

export interface ToastBlankProps {
  /**
   * Optionally provide a method to which the user can dismiss the toast
   */
  onClose?: () => void
}

export const ToastBlank = ({
  children,
  onClose,
}: PropsWithChildren<ToastBlankProps>) => {
  return (
    <div className="p-2 rounded bg-zinc-50 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 drop-shadow-md">
      <div className="p-2 relative">
        {children}
        {onClose ? (
          <div className="absolute top-0 right-0">
            <ButtonBlank onClick={onClose}>x</ButtonBlank>
          </div>
        ) : null}
      </div>
    </div>
  )
}
