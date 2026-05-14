import { Link } from 'react-router-dom'
import { FcButton, Eyebrow, FadeUp } from '@/components/primitives'
import { JyotirlingaRail } from '@/components/home/JyotirlingaRail'
import { ArrowRight, MapPin, Heart, Users } from 'lucide-react'

/**
 * Home — FaithConnect Landing Page
 * 
 * Premium Fortune-500 aesthetic with:
 * - Left-aligned asymmetric hero
 * - Anchored ॐ watermark at 4% opacity
 * - JyotirlingaRail carousel
 * - Dark stats section
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-ground-ivory">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Anchored ॐ watermark */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none"
          aria-hidden="true"
        >
          <span 
            className="font-deva text-[40rem] leading-none"
            style={{ color: 'hsl(var(--ink-espresso) / 0.04)' }}
          >
            ॐ
          </span>
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl">
            <FadeUp>
              <Eyebrow className="mb-6">One Platform for Faith</Eyebrow>
            </FadeUp>
            
            <FadeUp delay={100}>
              <h1 className="font-fraunces text-5xl md:text-6xl lg:text-7xl text-ink-espresso leading-[1.1] tracking-tight text-balance">
                Discover sacred spaces across India
              </h1>
            </FadeUp>
            
            <FadeUp delay={200}>
              <p className="mt-6 text-lg md:text-xl text-ink-walnut leading-relaxed max-w-xl">
                Connect with temples, gurdwaras, and spiritual centers. Support your faith community through verified donations.
              </p>
            </FadeUp>
            
            <FadeUp delay={300}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <FcButton asChild variant="primary" size="lg">
                  <Link to="/explore">
                    Explore Temples
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </FcButton>
                
                <FcButton asChild variant="secondary" size="lg">
                  <Link to="/list-your-temple">
                    List Your Temple
                  </Link>
                </FcButton>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Jyotirlinga Rail Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <Eyebrow className="mb-3">The 12 Sacred Jyotirlingas</Eyebrow>
                <h2 className="font-fraunces text-3xl md:text-4xl text-ink-espresso">
                  Divine manifestations of Lord Shiva
                </h2>
              </div>
              <Link 
                to="/explore?filter=jyotirlinga"
                className="text-copper-500 hover:text-copper-600 font-medium inline-flex items-center gap-1 transition-colors"
              >
                View all
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
          
          <FadeUp delay={150}>
            <JyotirlingaRail />
          </FadeUp>
        </div>
      </section>

      {/* Stats Section - Dark */}
      <section className="py-20 lg:py-24 bg-ground-deep text-ground-bone">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {/* Stat 1 */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-copper-500/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-copper-400" />
                  </div>
                </div>
                <p className="font-fraunces text-4xl md:text-5xl text-ground-bone mb-2">
                  17+
                </p>
                <p className="text-ink-mist text-sm uppercase tracking-wider">
                  Verified Temples
                </p>
              </div>

              {/* Stat 2 */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-copper-500/20 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-copper-400" />
                  </div>
                </div>
                <p className="font-fraunces text-4xl md:text-5xl text-ground-bone mb-2">
                  12
                </p>
                <p className="text-ink-mist text-sm uppercase tracking-wider">
                  Jyotirlingas Listed
                </p>
              </div>

              {/* Stat 3 */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-copper-500/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-copper-400" />
                  </div>
                </div>
                <p className="font-fraunces text-4xl md:text-5xl text-ground-bone mb-2">
                  4
                </p>
                <p className="text-ink-mist text-sm uppercase tracking-wider">
                  Faiths Represented
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Eyebrow className="mb-4 justify-center">Why FaithConnect</Eyebrow>
              <h2 className="font-fraunces text-3xl md:text-4xl text-ink-espresso">
                Your trusted bridge to spiritual giving
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeUp delay={0}>
              <div className="fc-card p-8">
                <div className="w-14 h-14 rounded-full bg-copper-500/10 flex items-center justify-center mb-6">
                  <span className="font-deva text-2xl text-copper-500">✓</span>
                </div>
                <h3 className="font-fraunces text-xl text-ink-espresso mb-3">
                  Verified Temples
                </h3>
                <p className="text-ink-walnut leading-relaxed">
                  Every temple is verified before listing. Donate with confidence knowing your contribution reaches authentic spiritual institutions.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="fc-card p-8">
                <div className="w-14 h-14 rounded-full bg-copper-500/10 flex items-center justify-center mb-6">
                  <span className="font-deva text-2xl text-copper-500">🔗</span>
                </div>
                <h3 className="font-fraunces text-xl text-ink-espresso mb-3">
                  Direct Connection
                </h3>
                <p className="text-ink-walnut leading-relaxed">
                  We link you directly to official temple donation pages. No middlemen, no fees — your entire donation goes where you intend.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <div className="fc-card p-8">
                <div className="w-14 h-14 rounded-full bg-copper-500/10 flex items-center justify-center mb-6">
                  <span className="font-deva text-2xl text-copper-500">🕉</span>
                </div>
                <h3 className="font-fraunces text-xl text-ink-espresso mb-3">
                  Multi-Faith Support
                </h3>
                <p className="text-ink-walnut leading-relaxed">
                  From Hindu temples to Sikh gurdwaras, Buddhist viharas to Jain derasars — we celebrate and support India&apos;s spiritual diversity.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-ground-sand">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeUp>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-fraunces text-3xl md:text-4xl text-ink-espresso mb-6">
                Ready to explore sacred spaces?
              </h2>
              <p className="text-ink-walnut text-lg mb-10 max-w-xl mx-auto">
                Discover temples across India, learn about their history, and support them through verified donation channels.
              </p>
              <FcButton asChild variant="primary" size="lg">
                <Link to="/explore">
                  Start Exploring
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </FcButton>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
