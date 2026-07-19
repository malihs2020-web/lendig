import * as React from 'react'

import { cn } from '@/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-surface p-8 shadow-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Card }
