'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface FadeUpProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Delay before animation starts (in ms)
   * @default 0
   */
  delay?: number
  /**
   * Duration of animation (in ms)
   * @default 640
   */
  duration?: number
  /**
   * Whether to trigger animation
   * @default true
   */
  animate?: boolean
  /**
   * Tag to render
   * @default 'div'
   */
  as?: keyof JSX.IntrinsicElements
}

/**
 * FadeUp — Scroll-triggered fade-up animation wrapper
 * 
 * Uses IntersectionObserver to trigger a gentle fade-up animation
 * when the element enters the viewport.
 * 
 * Respects prefers-reduced-motion.
 */
export const FadeUp = React.forwardRef<HTMLDivElement, FadeUpProps>(
  ({ 
    className, 
    delay = 0, 
    duration = 640, 
    animate = true, 
    as: Tag = 'div',
    children, 
    style,
    ...props 
  }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false)
    const elementRef = React.useRef<HTMLDivElement>(null)
    
    // Combine refs
    React.useImperativeHandle(ref, () => elementRef.current!)

    React.useEffect(() => {
      if (!animate) {
        setIsVisible(true)
        return
      }

      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReducedMotion) {
        setIsVisible(true)
        return
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      )

      if (elementRef.current) {
        observer.observe(elementRef.current)
      }

      return () => observer.disconnect()
    }, [animate])

    const Component = Tag as React.ElementType

    return (
      <Component
        ref={elementRef}
        className={cn(
          'transition-all ease-fc-out',
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-6',
          className
        )}
        style={{
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
          ...style,
        }}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

FadeUp.displayName = 'FadeUp'
