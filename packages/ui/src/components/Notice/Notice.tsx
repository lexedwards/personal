import { ReactNode } from 'react'

export type NoticeLevel = 'success' | 'info' | 'warn' | 'error'

interface NotiveLevelClassObject {
  root: string
  img: string
}

const noticeLevelClasses: Record<NoticeLevel, NotiveLevelClassObject> = {
  error: {
    root: 'border-red-700 dark:border-red-300',
    img: '',
  },
  info: {
    root: 'border-sky-700 dark:border-sky-300',
    img: '',
  },
  success: {
    root: 'border-emerald-700 dark:border-emerald-300',
    img: '',
  },
  warn: {
    root: 'border-amber-700 dark:border-amber-300',
    img: '',
  },
}

export interface NoticeProps {
  children?: ReactNode
  level?: NoticeLevel
  title?: string
}

export const Notice = ({ children, level = 'info', title }: NoticeProps) => {
  const { root, img } = noticeLevelClasses[level]
  return (
    <div
      className={`${root} border-l-4 rounded p-4 bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200`}
    >
      <div>
        <span className="font-bold">Note: </span>
        <span>{title}</span>
      </div>
      <div>{children}</div>
    </div>
  )
}
