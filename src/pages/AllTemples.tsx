import { useState, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { supabase, type Temple } from '@/lib/supabase'
import { Eyebrow, FadeUp } from '@/components/primitives'
import { Input } from '@/components/ui/input'
import { Search, MapPin, Filter, X } from 'lucide-react'
import { cn } from '@/lib/utils'

// Indian states for filtering
const INDIAN_STATES = [
  'All States',
  'Andhra Pradesh',
  'Delhi',
  'Gujarat',
  'Jammu and Kashmir',
  'Jharkhand',
  'Madhya Pradesh',
  'Maharashtra',
  'Odisha',
  'Punjab',
  'Tamil Nadu',
  'Uttarakhand',
  'Uttar Pradesh',
]

/**
 * Explore — Temple discovery page
 * 
 * Features:
 * - Supabase-powered temple grid
 * - State filter
 * - Search by name/location
 * - Jyotirlinga filter via URL param
 */
export default function Explore() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [temples, setTemples] = useState<Temple[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedState, setSelectedState] = useState('All States')
  const [showFilters, setShowFilters] = useState(false)

  // Check for jyotirlinga filter from URL
  const filterJyotirlinga = searchParams.get('filter') === 'jyotirlinga'

  // Fetch temples from Supabase
  useEffect(() => {
    async function fetchTemples() {
      setLoading(true)

      let query = supabase
        .from('temples')
        .select('*, religion:religions(name, slug)')
        .order('name')

      if (filterJyotirlinga) {
        query = query.eq('is_jyotirlinga', true)
      }

      const { data, error } = await query

      if (error) {
        console.error('[v0] Error fetching temples:', error)
        setLoading(false)
        return
      }

      setTemples(data || [])
      setLoading(false)
    }

    fetchTemples()
  }, [filterJyotirlinga])

  // Filter temples based on search and state
  const filteredTemples = useMemo(() => {
    return temples.filter((temple) => {
      // State filter
      if (selectedState !== 'All States' && temple.state !== selectedState) {
        return false
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          temple.name.toLowerCase().includes(query) ||
          temple.location.toLowerCase().includes(query) ||
          temple.state.toLowerCase().includes(query) ||
          (temple.deity && temple.deity.toLowerCase().includes(query))
        )
      }

      return true
    })
  }, [temples, selectedState, searchQuery])

  // Clear jyotirlinga filter
  const clearJyotirlingaFilter = () => {
    setSearchParams({})
  }

  return (
    <div className="min-h-screen bg-ground-ivory pb-20">
      {/* Header */}
      <section className="py-12 lg:py-16 border-b border-[hsl(var(--line-hair))]">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeUp>
            <Eyebrow className="mb-4">
              {filterJyotirlinga ? 'The 12 Jyotirlingas' : 'Explore Temples'}
            </Eyebrow>
            <h1 className="font-fraunces text-4xl md:text-5xl text-ink-espresso mb-4">
              {filterJyotirlinga
                ? 'Sacred Shiva Shrines'
                : 'Discover Sacred Spaces'}
            </h1>
            <p className="text-ink-walnut text-lg max-w-2xl">
              {filterJyotirlinga
                ? 'The twelve divine manifestations of Lord Shiva across India.'
                : 'Browse verified temples, gurdwaras, and spiritual centers across India.'}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filters and Content */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Search and filter bar */}
          <FadeUp delay={100}>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-stone" />
                <Input
                  placeholder="Search by name, location, or deity..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-ground-bone border-[hsl(var(--line-soft))] focus:border-copper-500"
                />
              </div>

              {/* Filter toggle (mobile) */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[hsl(var(--line-soft))] bg-ground-bone text-ink-espresso"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>

              {/* State filter (desktop) */}
              <div className="hidden md:flex items-center gap-2 flex-wrap">
                {INDIAN_STATES.slice(0, 6).map((state) => (
                  <button
                    key={state}
                    onClick={() => setSelectedState(state)}
                    className={cn(
                      'px-4 py-2 rounded-full text-sm transition-all duration-200',
                      selectedState === state
                        ? 'bg-ink-espresso text-ground-bone'
                        : 'bg-ground-bone text-ink-walnut hover:bg-ground-sand border border-[hsl(var(--line-hair))]'
                    )}
                  >
                    {state}
                  </button>
                ))}
                {INDIAN_STATES.length > 6 && (
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="px-4 py-2 rounded-full text-sm bg-ground-bone border border-[hsl(var(--line-hair))] text-ink-walnut"
                  >
                    <option value="">More States...</option>
                    {INDIAN_STATES.slice(6).map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          </FadeUp>

          {/* Mobile filters panel */}
          {showFilters && (
            <FadeUp>
              <div className="md:hidden mb-6 p-4 bg-ground-bone rounded-lg border border-[hsl(var(--line-hair))]">
                <h3 className="font-fraunces text-lg text-ink-espresso mb-3">
                  Filter by State
                </h3>
                <div className="flex flex-wrap gap-2">
                  {INDIAN_STATES.map((state) => (
                    <button
                      key={state}
                      onClick={() => {
                        setSelectedState(state)
                        setShowFilters(false)
                      }}
                      className={cn(
                        'px-3 py-1.5 rounded-full text-sm transition-all duration-200',
                        selectedState === state
                          ? 'bg-ink-espresso text-ground-bone'
                          : 'bg-ground-ivory text-ink-walnut border border-[hsl(var(--line-hair))]'
                      )}
                    >
                      {state}
                    </button>
                  ))}
                </div>
              </div>
            </FadeUp>
          )}

          {/* Active filters */}
          {(filterJyotirlinga || selectedState !== 'All States' || searchQuery) && (
            <FadeUp delay={150}>
              <div className="flex flex-wrap gap-2 mb-6">
                {filterJyotirlinga && (
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-copper-500/10 text-copper-600 text-sm">
                    Jyotirlingas Only
                    <button onClick={clearJyotirlingaFilter}>
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}
                {selectedState !== 'All States' && (
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-copper-500/10 text-copper-600 text-sm">
                    {selectedState}
                    <button onClick={() => setSelectedState('All States')}>
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-copper-500/10 text-copper-600 text-sm">
                    "{searchQuery}"
                    <button onClick={() => setSearchQuery('')}>
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}
              </div>
            </FadeUp>
          )}

          {/* Results count */}
          <FadeUp delay={200}>
            <p className="text-ink-stone mb-6">
              <span className="font-medium text-ink-espresso">
                {filteredTemples.length}
              </span>{' '}
              {filteredTemples.length === 1 ? 'temple' : 'temples'} found
            </p>
          </FadeUp>

          {/* Temple grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-[340px] rounded-lg bg-ground-sand animate-pulse"
                />
              ))}
            </div>
          ) : filteredTemples.length === 0 ? (
            <FadeUp>
              <div className="text-center py-20">
                <span className="font-deva text-6xl text-ink-mist block mb-4">
                  ॐ
                </span>
                <h3 className="font-fraunces text-xl text-ink-espresso mb-2">
                  No temples found
                </h3>
                <p className="text-ink-walnut">
                  Try adjusting your search or filters
                </p>
              </div>
            </FadeUp>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemples.map((temple, index) => (
                <FadeUp key={temple.id} delay={index * 50}>
                  <Link
                    to={`/explore/${temple.slug}`}
                    className="fc-card overflow-hidden group block"
                  >
                    {/* Image */}
                    <div className="h-[180px] bg-gradient-to-br from-ground-sand to-ground-bone relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-deva text-6xl text-ink-espresso/10">
                          ॐ
                        </span>
                      </div>
                      {temple.is_jyotirlinga && (
                        <span className="absolute top-3 left-3 px-2 py-1 bg-copper-500/90 text-ground-bone text-xs font-medium rounded-full">
                          Jyotirlinga
                        </span>
                      )}
                      {temple.verified && !temple.is_jyotirlinga && (
                        <span className="absolute top-3 left-3 px-2 py-1 bg-ink-espresso/80 text-ground-bone text-xs font-medium rounded-full">
                          Verified
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-fraunces text-lg text-ink-espresso group-hover:text-copper-600 transition-colors line-clamp-1">
                        {temple.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-2 text-ink-stone text-sm">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="line-clamp-1">
                          {temple.location}, {temple.state}
                        </span>
                      </div>
                      {temple.deity && (
                        <p className="mt-2 text-sm text-ink-walnut line-clamp-1">
                          {temple.deity}
                        </p>
                      )}
                      {temple.description && (
                        <p className="mt-3 text-sm text-ink-stone line-clamp-2">
                          {temple.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
