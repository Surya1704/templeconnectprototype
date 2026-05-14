import * as React from 'react'
import { cn } from '@/lib/utils'

interface FcMarkProps extends React.SVGAttributes<SVGSVGElement> {
  /**
   * Size of the mark
   * @default 40
   */
  size?: number
}

/**
 * FcMark — The FaithConnect interlaced knot/lotus mark
 * 
 * A stylized interlaced design representing connection and faith.
 * Uses the copper-500 color by default.
 */
export const FcMark = React.forwardRef<SVGSVGElement, FcMarkProps>(
  ({ className, size = 40, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('text-copper-500', className)}
        aria-label="FaithConnect"
        {...props}
      >
        {/* Interlaced knot design - stylized from the logo */}
        <path
          d="M50 10 
             C30 10, 15 25, 15 45
             C15 55, 20 65, 30 72
             C20 65, 10 55, 10 45
             C10 20, 30 5, 50 5
             C70 5, 90 20, 90 45
             C90 55, 80 65, 70 72
             C80 65, 85 55, 85 45
             C85 25, 70 10, 50 10
             Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M50 90
             C70 90, 85 75, 85 55
             C85 45, 80 35, 70 28
             C80 35, 90 45, 90 55
             C90 80, 70 95, 50 95
             C30 95, 10 80, 10 55
             C10 45, 20 35, 30 28
             C20 35, 15 45, 15 55
             C15 75, 30 90, 50 90
             Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Center crossing */}
        <ellipse
          cx="50"
          cy="50"
          rx="18"
          ry="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          transform="rotate(45 50 50)"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="18"
          ry="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          transform="rotate(-45 50 50)"
        />
      </svg>
    )
  }
)

FcMark.displayName = 'FcMark'
