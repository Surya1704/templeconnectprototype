import * as React from 'react'
import { cn } from '@/lib/utils'

interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Show the copper hairline before the text
   * @default true
   */
  withLine?: boolean
}

/**
 * Eyebrow — Editorial uppercase caption with optional copper hairline
 * 
 * Usage:
 * <Eyebrow>Featured Temples</Eyebrow>
 * <Eyebrow withLine={false}>Simple Label</Eyebrow>
 */
export const Eyebrow = React.forwardRef<HTMLSpanElement, EyebrowProps>(
  ({ className, withLine = true, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-3',
          'font-sans uppercase font-medium text-xs',
          'tracking-[0.12em] text-ink-stone',
          className
        )}
        {...props}
      >
        {withLine && (
          <span 
            className="w-6 h-px bg-copper-500" 
            aria-hidden="true" 
          />
        )}
        {children}
      </span>
    )
  }
)

Eyebrow.displayName = 'Eyebrow'
