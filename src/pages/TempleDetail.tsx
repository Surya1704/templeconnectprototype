import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { supabase, type Temple } from '@/lib/supabase'
import { FcButton, Eyebrow, FadeUp, ExternalLink } from '@/components/primitives'
import { MapPin, Clock, ArrowLeft, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * TempleDetail — Individual temple page
 * 
 * Features:
 * - Fetches from Supabase by slug
 * - Premium Fortune-500 aesthetic
 * - External donation link
 */
export default function TempleDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [temple, setTemple] = useState<Temple | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    async function fetchTemple() {
      if (!id) {
        setNotFound(true)
        setLoading(false)
        return
      }

      // Try to find by slug first, then by ID
      const { data, error } = await supabase
        .from('temples')
        .select('*, religion:religions(name, slug)')
        .or(`slug.eq.${id},id.eq.${id}`)
        .single()

      if (error || !data) {
        console.error('[v0] Temple not found:', error)
        setNotFound(true)
        setLoading(false)
        return
      }

      setTemple(data)
      setLoading(false)
    }

    fetchTemple()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-ground-ivory flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-copper-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-ink-stone">Loading temple information...</p>
        </div>
      </div>
    )
  }

  if (notFound || !temple) {
    return (
      <div className="min-h-screen bg-ground-ivory flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <span className="font-deva text-6xl text-ink-mist block mb-6">ॐ</span>
          <h1 className="font-fraunces text-2xl text-ink-espresso mb-3">
            Temple Not Found
          </h1>
          <p className="text-ink-walnut mb-8">
            We couldn&apos;t find the temple you&apos;re looking for. It may have been
            removed or you followed an incorrect link.
          </p>
          <FcButton asChild variant="primary">
            <Link to="/explore">Browse All Temples</Link>
          </FcButton>
        </div>
      </div>
    )
  }

  const religionName = temple.religion?.name || 'Hinduism'

  return (
    <div className="min-h-screen bg-ground-ivory pb-20">
      {/* Back navigation */}
      <div className="border-b border-[hsl(var(--line-hair))]">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-ink-walnut hover:text-ink-espresso transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </div>

      {/* Hero section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <FadeUp>
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-ground-sand to-ground-bone relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-deva text-[12rem] text-ink-espresso/5">ॐ</span>
                </div>
                {temple.is_jyotirlinga && (
                  <span className="absolute top-4 left-4 px-3 py-1.5 bg-copper-500 text-ground-bone text-sm font-medium rounded-full">
                    Jyotirlinga
                  </span>
                )}
                {temple.verified && !temple.is_jyotirlinga && (
                  <span className="absolute top-4 left-4 px-3 py-1.5 bg-ink-espresso text-ground-bone text-sm font-medium rounded-full">
                    Verified
                  </span>
                )}
              </div>
            </FadeUp>

            {/* Content */}
            <div>
              <FadeUp delay={100}>
                <Eyebrow className="mb-4">{religionName}</Eyebrow>
                <h1 className="font-fraunces text-4xl md:text-5xl text-ink-espresso mb-4">
                  {temple.name}
                </h1>
              </FadeUp>

              <FadeUp delay={150}>
                <div className="flex items-center gap-2 text-ink-walnut mb-6">
                  <MapPin className="w-4 h-4 text-copper-500" />
                  <span>
                    {temple.location}, {temple.state}
                  </span>
                </div>
              </FadeUp>

              {temple.deity && (
                <FadeUp delay={200}>
                  <p className="text-lg text-ink-walnut mb-6">
                    <span className="text-ink-stone">Deity:</span> {temple.deity}
                  </p>
                </FadeUp>
              )}

              {temple.description && (
                <FadeUp delay={250}>
                  <p className="text-ink-walnut leading-relaxed mb-8">
                    {temple.description}
                  </p>
                </FadeUp>
              )}

              {temple.timings && (
                <FadeUp delay={300}>
                  <div className="flex items-start gap-3 mb-8 p-4 bg-ground-bone rounded-lg border border-[hsl(var(--line-hair))]">
                    <Clock className="w-5 h-5 text-copper-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-ink-espresso mb-1">
                        Timings
                      </h3>
                      <p className="text-ink-walnut text-sm">{temple.timings}</p>
                    </div>
                  </div>
                </FadeUp>
              )}

              {/* CTA Buttons */}
              <FadeUp delay={350}>
                <div className="flex flex-col sm:flex-row gap-4">
                  {temple.donation_url ? (
                    <FcButton asChild variant="primary" size="lg">
                      <a
                        href={temple.donation_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Heart className="w-4 h-4 mr-1" />
                        Donate to Temple
                      </a>
                    </FcButton>
                  ) : (
                    <FcButton asChild variant="secondary" size="lg">
                      <Link to="/donate">View Donation Options</Link>
                    </FcButton>
                  )}
                </div>
              </FadeUp>

              {temple.donation_url && (
                <FadeUp delay={400}>
                  <p className="mt-4 text-sm text-ink-stone">
                    You will be redirected to the temple&apos;s official donation page.
                    <br />
                    <ExternalLink
                      href={temple.donation_url}
                      className="text-xs"
                    >
                      {new URL(temple.donation_url).hostname}
                    </ExternalLink>
                  </p>
                </FadeUp>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Info section */}
      <section className="py-12 lg:py-16 bg-ground-sand">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeUp>
            <h2 className="font-fraunces text-2xl text-ink-espresso mb-8">
              About This {temple.is_jyotirlinga ? 'Jyotirlinga' : 'Temple'}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeUp delay={100}>
              <div className="fc-card p-6">
                <h3 className="font-fraunces text-lg text-ink-espresso mb-2">
                  Location
                </h3>
                <p className="text-ink-walnut">
                  {temple.location}, {temple.state}, India
                </p>
                {temple.latitude && temple.longitude && (
                  <ExternalLink
                    href={`https://www.google.com/maps?q=${temple.latitude},${temple.longitude}`}
                    className="mt-2 inline-block text-sm"
                  >
                    View on Google Maps
                  </ExternalLink>
                )}
              </div>
            </FadeUp>

            <FadeUp delay={150}>
              <div className="fc-card p-6">
                <h3 className="font-fraunces text-lg text-ink-espresso mb-2">
                  Religion
                </h3>
                <p className="text-ink-walnut">{religionName}</p>
                {temple.deity && (
                  <p className="text-ink-stone text-sm mt-1">
                    Principal deity: {temple.deity}
                  </p>
                )}
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <div className="fc-card p-6">
                <h3 className="font-fraunces text-lg text-ink-espresso mb-2">
                  Status
                </h3>
                <div className="flex flex-wrap gap-2">
                  {temple.is_jyotirlinga && (
                    <span className="px-2 py-1 bg-copper-500/10 text-copper-600 text-sm rounded-full">
                      Jyotirlinga
                    </span>
                  )}
                  {temple.verified && (
                    <span className="px-2 py-1 bg-ink-espresso/10 text-ink-espresso text-sm rounded-full">
                      Verified
                    </span>
                  )}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeUp>
            <div className="fc-card p-8 md:p-12 text-center">
              <h2 className="font-fraunces text-2xl md:text-3xl text-ink-espresso mb-4">
                Discover More Sacred Spaces
              </h2>
              <p className="text-ink-walnut mb-8 max-w-xl mx-auto">
                Explore other temples and spiritual centers across India. Support
                your faith community through verified donations.
              </p>
              <FcButton asChild variant="secondary">
                <Link to="/explore">Explore All Temples</Link>
              </FcButton>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
