import * as React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { supabase, type Temple } from '@/lib/supabase'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

interface JyotirlingaRailProps {
  className?: string
}

/**
 * JyotirlingaRail — Horizontal carousel of Jyotirlinga temples
 * 
 * Features:
 * - Auto-advances every 4s (pauses on hover)
 * - Manual navigation with chevron buttons
 * - Links to individual temple pages
 * - Fetches from Supabase
 */
export function JyotirlingaRail({ className }: JyotirlingaRailProps) {
  const [temples, setTemples] = React.useState<Temple[]>([])
  const [loading, setLoading] = React.useState(true)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Fetch Jyotirlingas from Supabase
  React.useEffect(() => {
    async function fetchJyotirlingas() {
      const { data, error } = await supabase
        .from('temples')
        .select('*')
        .eq('is_jyotirlinga', true)
        .order('name')

      if (error) {
        console.error('[v0] Error fetching Jyotirlingas:', error)
        return
      }

      setTemples(data || [])
      setLoading(false)
    }

    fetchJyotirlingas()
  }, [])

  // Auto-advance carousel
  React.useEffect(() => {
    if (isPaused || temples.length === 0) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % temples.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused, temples.length])

  // Scroll to active card
  React.useEffect(() => {
    if (!containerRef.current || temples.length === 0) return

    const cardWidth = 280 + 16 // card width + gap
    containerRef.current.scrollTo({
      left: activeIndex * cardWidth,
      behavior: 'smooth',
    })
  }, [activeIndex, temples.length])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + temples.length) % temples.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % temples.length)
  }

  if (loading) {
    return (
      <div className={cn('flex gap-4 overflow-hidden', className)}>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-[280px] h-[320px] flex-shrink-0 rounded-lg bg-ground-sand animate-pulse"
          />
        ))}
      </div>
    )
  }

  if (temples.length === 0) {
    return null
  }

  return (
    <div
      className={cn('relative group', className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className={cn(
          'absolute left-0 top-1/2 -translate-y-1/2 z-10',
          'w-10 h-10 rounded-full bg-ground-bone/90 backdrop-blur-sm',
          'flex items-center justify-center',
          'border border-[hsl(var(--line-soft))]',
          'opacity-0 group-hover:opacity-100 transition-opacity duration-300',
          'hover:bg-ground-sand',
          '-translate-x-4'
        )}
        aria-label="Previous temple"
      >
        <ChevronLeft className="w-5 h-5 text-ink-espresso" />
      </button>

      <button
        onClick={handleNext}
        className={cn(
          'absolute right-0 top-1/2 -translate-y-1/2 z-10',
          'w-10 h-10 rounded-full bg-ground-bone/90 backdrop-blur-sm',
          'flex items-center justify-center',
          'border border-[hsl(var(--line-soft))]',
          'opacity-0 group-hover:opacity-100 transition-opacity duration-300',
          'hover:bg-ground-sand',
          'translate-x-4'
        )}
        aria-label="Next temple"
      >
        <ChevronRight className="w-5 h-5 text-ink-espresso" />
      </button>

      {/* Carousel container */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {temples.map((temple, index) => (
          <Link
            key={temple.id}
            to={`/temple/${temple.slug}`}
            className={cn(
              'w-[280px] flex-shrink-0 fc-card overflow-hidden',
              'group/card transition-all duration-300',
              index === activeIndex && 'ring-2 ring-copper-500/30'
            )}
          >
            {/* Image placeholder - would use temple.image_url */}
            <div className="h-[180px] bg-gradient-to-br from-ground-sand to-ground-bone relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-deva text-6xl text-ink-espresso/10">ॐ</span>
              </div>
              {temple.is_jyotirlinga && (
                <span className="absolute top-3 left-3 px-2 py-1 bg-copper-500/90 text-ground-bone text-xs font-medium rounded-full">
                  Jyotirlinga
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-fraunces text-lg text-ink-espresso group-hover/card:text-copper-600 transition-colors">
                {temple.name}
              </h3>
              <div className="flex items-center gap-1.5 mt-2 text-ink-stone text-sm">
                <MapPin className="w-3.5 h-3.5" />
                <span>{temple.location}, {temple.state}</span>
              </div>
              {temple.deity && (
                <p className="mt-2 text-sm text-ink-walnut">
                  {temple.deity}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mt-4">
        {temples.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              index === activeIndex
                ? 'bg-copper-500 w-6'
                : 'bg-ink-mist hover:bg-ink-stone'
            )}
            aria-label={`Go to temple ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
