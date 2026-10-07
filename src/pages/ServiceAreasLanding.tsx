import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowRight, Navigation } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { BUSINESS } from '@/data/images';
import { serviceAreas } from '@/data/serviceAreas';
import { getService } from '@/data/services';
import * as Icons from 'lucide-react';

export default function ServiceAreasLanding() {
  return (
    <>
      <SEO
        title="Service Areas | Electrician Near Valley, Alabama | Bausley Electrical"
        description="Bausley Electrical Services serves Valley, Alabama and surrounding communities in Chambers County and nearby areas. Find your location and learn about our electrical services."
        path="/service-areas"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 py-20">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-electric-500/10 blur-3xl" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-electric-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-electric-400">
              <Navigation className="h-3.5 w-3.5" />
              Where We Work
            </span>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">Service Areas</h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-200">
              Based in Valley, Alabama, we serve homeowners throughout Chambers County and nearby communities. Find your area below to learn about the electrical services available near you.
            </p>
            <div className="mt-8">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary">
                <Phone className="h-5 w-5" />
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Area cards */}
      <section className="py-20">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => {
              const service = getService(area.primaryServiceSlug);
              const SIcon = service
                ? (Icons[service.icon as keyof typeof Icons] || Icons.Zap) as Icons.LucideIcon
                : Icons.Zap;
              return (
                <Link
                  key={area.slug}
                  to={`/service-areas/${area.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={area.image}
                      alt={`Electrical services in ${area.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-2 text-white">
                        <MapPin className="h-5 w-5 text-electric-400" />
                        <span className="text-lg font-bold">{area.name}</span>
                      </div>
                      <p className="mt-1 text-xs text-navy-200">{area.distance} · {area.county}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    {service && (
                      <div className="mb-3 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-electric-50">
                          <SIcon className="h-4 w-4 text-electric-600" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-electric-600">{service.shortTitle}</span>
                      </div>
                    )}
                    <p className="flex-1 text-sm leading-relaxed text-charcoal-600">{area.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 transition-colors group-hover:text-electric-700">
                      View {area.name} Page
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Not listed */}
          <div className="mt-12 rounded-2xl border border-charcoal-200 bg-charcoal-50 p-8 text-center">
            <h2 className="text-xl font-bold text-navy-900">Don&apos;t See Your Area?</h2>
            <p className="mt-2 text-charcoal-600">
              We may still be able to help. Call us at <a href={`tel:${BUSINESS.phoneRaw}`} className="font-semibold text-electric-600 hover:text-electric-700">{BUSINESS.phone}</a> to check if we serve your location.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Need an Electrician in Your Area?"
        subtitle="We serve Valley, Alabama and the surrounding communities. Call us to schedule your electrical service today."
      />
    </>
  );
}
