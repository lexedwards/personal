export interface ToolTipProps {
  children: string
}

export const ToolTip = ({ children }: ToolTipProps) => {
  return (
    <div className="bg-zinc-900 dark:bg-zinc-50 max-w-max px-2 py-1 rounded select-none">
      <span className="text-xs font-mono text-zinc-50 dark:text-zinc-900 font-semibold">
        {children}
      </span>
    </div>
  )
}
