import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

interface FcButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  asChild?: boolean
}

/**
 * FcButton — FaithConnect's premium button primitive
 * 
 * Variants:
 * - primary: Espresso fill with bone text (default)
 * - secondary: Bone fill with espresso text and hairline border
 * - ghost: Transparent with copper text
 */
export const FcButton = React.forwardRef<HTMLButtonElement, FcButtonProps>(
  ({ className, variant = 'primary', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    
    return (
      <Comp
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center gap-2 font-sans font-medium',
          'rounded-pill transition-all duration-300 ease-fc-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          
          // Size variants
          size === 'default' && 'h-12 px-8 text-sm',
          size === 'sm' && 'h-10 px-6 text-sm',
          size === 'lg' && 'h-14 px-10 text-base',
          
          // Color variants
          variant === 'primary' && [
            'bg-ink-espresso text-ground-bone',
            'hover:bg-ink-walnut',
            'active:scale-[0.98]',
          ],
          variant === 'secondary' && [
            'bg-ground-bone text-ink-espresso',
            'border border-[hsl(var(--line-soft))]',
            'hover:bg-ground-sand hover:border-[hsl(var(--line-hair))]',
            'active:scale-[0.98]',
          ],
          variant === 'ghost' && [
            'bg-transparent text-copper-500',
            'hover:text-copper-600 hover:bg-copper-500/5',
          ],
          
          className
        )}
        {...props}
      />
    )
  }
)

FcButton.displayName = 'FcButton'
