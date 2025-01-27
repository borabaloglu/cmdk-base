import React from "react"
import { merge } from "@/lib/utils"

interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function Kbd({ children, className, ...props }: KbdProps) {
  return (
    <kbd
      className={merge(
        "border-muted bg-subtle rounded border px-2 py-1 font-mono text-sm",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  )
}
