import { Link, useParams, Navigate } from 'react-router-dom';
import { Phone, MapPin, ArrowRight, ArrowLeft, ChevronDown, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { BUSINESS } from '@/data/images';
import { getServiceArea, serviceAreas } from '@/data/serviceAreas';
import { getService, services } from '@/data/services';
import * as Icons from 'lucide-react';
import { useState } from 'react';

export default function ServiceAreaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? getServiceArea(slug) : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!area) return <Navigate to="/service-areas" replace />;

  const service = getService(area.primaryServiceSlug);
  const SIcon = service
    ? (Icons[service.icon as keyof typeof Icons] || Icons.Zap) as Icons.LucideIcon
    : Icons.Zap;

  const otherAreas = serviceAreas.filter((a) => a.slug !== area.slug).slice(0, 5);

  // Generate area-specific FAQs
  const areaFaqs = [
    {
      q: `Do you serve ${area.name}?`,
      a: `Yes. ${area.notes} We provide residential electrical services including ${service ? service.title.toLowerCase() : 'installation, repair, and troubleshooting'} for homeowners in ${area.name}. Call us at ${BUSINESS.phone} to schedule a visit.`,
    },
    {
      q: `How far is ${area.name} from your base?`,
      a: `${area.name} is ${area.distance.replace('Based in ', 'our home base in Valley,').replace(' miles from Valley', ' miles from Valley')}. ${area.notes}`,
    },
    {
      q: `What electrical services do you offer in ${area.name}?`,
      a: `We offer a full range of residential electrical services in ${area.name}, including installation, repair, panel upgrades, wiring, lighting, and troubleshooting. This page focuses on our ${service ? service.title.toLowerCase() : 'electrical'} services — explore our full services page to see everything we do.`,
    },
  ];

  return (
    <>
      <SEO
        title={area.metaTitle}
        description={area.metaDescription}
        path={`/service-areas/${area.slug}`}
        image={area.image}
        type="article"
        jsonLd={[{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: `${service?.title || 'Electrical Services'} in ${area.name}`,
          description: area.description,
          provider: {
            '@type': 'Electrician',
            name: BUSINESS.name,
            telephone: BUSINESS.phone,
            address: {
              '@type': 'PostalAddress',
              streetAddress: BUSINESS.addressStreet,
              addressLocality: BUSINESS.addressCity,
              addressRegion: BUSINESS.addressState,
              postalCode: BUSINESS.addressZip,
              addressCountry: 'US',
            },
          },
          areaServed: { '@type': 'City', name: area.name },
        }, {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: areaFaqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 py-20">
        <div className="absolute inset-0">
          <img src={area.image} alt={`Electrical services in ${area.name}`} className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/70" />
        </div>
        <div className="container-x relative">
          <div className="max-w-3xl">
            <Link to="/service-areas" className="inline-flex items-center gap-2 text-sm font-medium text-navy-300 transition-colors hover:text-electric-400">
              <ArrowLeft className="h-4 w-4" />
              All Service Areas
            </Link>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-500">
                <MapPin className="h-7 w-7 text-navy-950" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-400">{area.county}</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">{area.h1}</h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-200">{area.description}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary">
                <Phone className="h-5 w-5" />
                Call {BUSINESS.phone}
              </a>
              <Link to="/contact" className="btn-outline-light">
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-900">Serving {area.name}</h2>
              <p className="mt-4 text-lg leading-relaxed text-charcoal-600">{area.body}</p>

              {/* Primary service focus */}
              {service && (
                <div className="mt-10 rounded-2xl border border-charcoal-200 bg-charcoal-50 p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-500">
                      <SIcon className="h-6 w-6 text-navy-950" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-electric-600">Primary Service in {area.name}</p>
                      <h3 className="text-xl font-bold text-navy-900">{service.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal-600">{service.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {service.needs.slice(0, 4).map((need) => (
                      <li key={need} className="flex items-start gap-2 text-sm text-charcoal-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-600" />
                        {need}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/services/${service.slug}`} className="mt-5 inline-flex items-center gap-2 font-semibold text-electric-600 hover:text-electric-700">
                    {service.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}

              {/* All services link */}
              <div className="mt-8 rounded-2xl border border-charcoal-200 bg-white p-8">
                <h3 className="text-lg font-bold text-navy-900">Full Range of Electrical Services</h3>
                <p className="mt-2 text-sm text-charcoal-600">
                  While this page focuses on {service?.title.toLowerCase() || 'a specific service'}, we offer a complete range of residential electrical work in {area.name} and the surrounding area.
                </p>
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {services.slice(0, 6).map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex items-center gap-2 rounded-lg p-2 text-sm text-charcoal-700 transition-colors hover:bg-charcoal-50 hover:text-electric-600"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-electric-600" />
                      {s.shortTitle}
                    </Link>
                  ))}
                </div>
                <Link to="/services" className="mt-4 inline-flex items-center gap-2 font-semibold text-electric-600 hover:text-electric-700">
                  View All Services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* FAQs */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-navy-900">{area.name} Electrical FAQs</h2>
                <div className="mt-6 space-y-3">
                  {areaFaqs.map((faq, i) => (
                    <div key={i} className="overflow-hidden rounded-xl border border-charcoal-200 bg-white">
                      <button
                        className="flex w-full items-center justify-between gap-4 p-5 text-left"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        <span className="font-semibold text-navy-900">{faq.q}</span>
                        <ChevronDown className={`h-5 w-5 flex-shrink-0 text-electric-600 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === i && (
                        <div className="px-5 pb-5 text-sm leading-relaxed text-charcoal-600 animate-fade-in">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-navy-900 p-6 text-white shadow-lg">
                <MapPin className="h-8 w-8 text-electric-400" />
                <h3 className="mt-4 text-xl font-bold">Serving {area.name}</h3>
                <p className="mt-2 text-sm text-navy-200">{area.distance} from our base in Valley, AL.</p>
                <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary mt-4 w-full">
                  <Phone className="h-4 w-4" />
                  {BUSINESS.phone}
                </a>
                <Link to="/contact" className="btn-outline-light mt-3 w-full">
                  Request Service
                </Link>
              </div>

              <div className="rounded-2xl border border-charcoal-200 bg-white p-6">
                <h3 className="font-bold text-navy-900">Other Service Areas</h3>
                <ul className="mt-4 space-y-2">
                  {otherAreas.map((a) => (
                    <li key={a.slug}>
                      <Link
                        to={`/service-areas/${a.slug}`}
                        className="flex items-center gap-2 rounded-lg p-2 text-sm text-charcoal-700 transition-colors hover:bg-charcoal-50 hover:text-electric-600"
                      >
                        <MapPin className="h-4 w-4 flex-shrink-0 text-electric-600" />
                        {a.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to="/service-areas" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-electric-600 hover:text-electric-700">
                  View All Areas <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Electrician in ${area.name}`}
        subtitle={`We provide residential electrical services in ${area.name} and throughout the Valley, Alabama area. Call us today to schedule your service.`}
      />
    </>
  );
}
