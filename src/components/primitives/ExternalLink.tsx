import * as React from 'react'
import { ExternalLink as ExternalLinkIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Show external link icon
   * @default true
   */
  showIcon?: boolean
}

/**
 * ExternalLink — Accessible external link with icon
 * 
 * Automatically adds:
 * - target="_blank"
 * - rel="noopener noreferrer"
 * - Screen reader text indicating new window
 * - Optional external link icon
 */
export const ExternalLink = React.forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  ({ className, children, showIcon = true, ...props }, ref) => {
    return (
      <a
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center gap-1.5',
          'text-copper-500 hover:text-copper-600',
          'underline underline-offset-4 decoration-copper-500/30',
          'hover:decoration-copper-500/60',
          'transition-colors duration-200',
          className
        )}
        {...props}
      >
        {children}
        {showIcon && (
          <ExternalLinkIcon 
            className="w-3.5 h-3.5 flex-shrink-0" 
            aria-hidden="true" 
          />
        )}
        <span className="sr-only">(opens in new tab)</span>
      </a>
    )
  }
)

ExternalLink.displayName = 'ExternalLink'
