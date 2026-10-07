import { Link, useParams, Navigate } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle2, AlertTriangle, ChevronDown, ArrowLeft, Zap } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { BUSINESS } from '@/data/images';
import { getService, services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import * as Icons from 'lucide-react';
import { useState } from 'react';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = (Icons[service.icon as keyof typeof Icons] || Icons.Zap) as Icons.LucideIcon;
  const related = service.relatedServices.map((s) => getService(s)).filter(Boolean);

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        image={service.image}
        type="article"
        jsonLd={[{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.summary,
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
          areaServed: { '@type': 'City', name: 'Valley, AL' },
        }, {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: service.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 py-20">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/70" />
        </div>
        <div className="container-x relative">
          <div className="max-w-3xl">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-navy-300 transition-colors hover:text-electric-400">
              <ArrowLeft className="h-4 w-4" />
              All Services
            </Link>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-500">
                <Icon className="h-7 w-7 text-navy-950" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-electric-400">{BUSINESS.name}</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">{service.h1}</h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-200">{service.summary}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary">
                <Phone className="h-5 w-5" />
                {service.ctaLabel}
              </a>
              <Link to="/contact" className="btn-outline-light">
                Request This Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-900">Overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-charcoal-600">{service.overview}</p>

              {service.sections.map((section, i) => (
                <div key={i} className="mt-10">
                  <h3 className="text-xl font-bold text-navy-900">{section.heading}</h3>
                  <p className="mt-3 leading-relaxed text-charcoal-600">{section.body}</p>
                </div>
              ))}

              {/* Warning signs */}
              <div className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold text-navy-900">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  Common Warning Signs
                </h3>
                <ul className="mt-4 space-y-2">
                  {service.warningSigns.map((sign) => (
                    <li key={sign} className="flex items-start gap-2 text-sm text-charcoal-700">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Needs */}
              <div className="mt-6 rounded-2xl border border-electric-200 bg-electric-50 p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold text-navy-900">
                  <CheckCircle2 className="h-5 w-5 text-electric-600" />
                  When You Might Need This Service
                </h3>
                <ul className="mt-4 space-y-2">
                  {service.needs.map((need) => (
                    <li key={need} className="flex items-start gap-2 text-sm text-charcoal-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-600" />
                      {need}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA card */}
              <div className="rounded-2xl bg-navy-900 p-6 text-white shadow-lg">
                <Zap className="h-8 w-8 text-electric-400" />
                <h3 className="mt-4 text-xl font-bold">Need this service?</h3>
                <p className="mt-2 text-sm text-navy-200">Call us today to discuss your project or schedule a visit.</p>
                <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary mt-4 w-full">
                  <Phone className="h-4 w-4" />
                  {BUSINESS.phone}
                </a>
                <Link to="/contact" className="btn-outline-light mt-3 w-full">
                  Send a Message
                </Link>
              </div>

              {/* Other services */}
              <div className="rounded-2xl border border-charcoal-200 bg-white p-6">
                <h3 className="font-bold text-navy-900">Other Services</h3>
                <ul className="mt-4 space-y-2">
                  {services.filter((s) => s.slug !== service.slug).slice(0, 6).map((s) => {
                    const SIcon = (Icons[s.icon as keyof typeof Icons] || Icons.Zap) as Icons.LucideIcon;
                    return (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}`}
                          className="flex items-center gap-3 rounded-lg p-2 text-sm text-charcoal-700 transition-colors hover:bg-charcoal-50 hover:text-electric-600"
                        >
                          <SIcon className="h-4 w-4 flex-shrink-0 text-electric-600" />
                          {s.shortTitle}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <Link to="/services" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-electric-600 hover:text-electric-700">
                  View All Services <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Service area link */}
              <div className="rounded-2xl border border-charcoal-200 bg-white p-6">
                <h3 className="font-bold text-navy-900">Service Areas</h3>
                <p className="mt-2 text-sm text-charcoal-600">We serve Valley, AL and surrounding communities.</p>
                <Link to="/service-areas" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-electric-600 hover:text-electric-700">
                  View Service Areas <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-charcoal-50 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-navy-900">{service.title} FAQs</h2>
            <div className="mt-8 space-y-3">
              {service.faqs.map((faq, i) => (
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
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="py-20">
          <div className="container-x">
            <h2 className="text-2xl font-bold text-navy-900">Related Services</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((s) => {
                if (!s) return null;
                const RIcon = (Icons[s.icon as keyof typeof Icons] || Icons.Zap) as Icons.LucideIcon;
                return (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group rounded-2xl border border-charcoal-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 transition-colors group-hover:bg-electric-500">
                      <RIcon className="h-5 w-5 text-electric-400 transition-colors group-hover:text-navy-950" />
                    </div>
                    <h3 className="mt-4 font-bold text-navy-900">{s.shortTitle}</h3>
                    <p className="mt-2 text-sm text-charcoal-600">{s.summary}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-electric-600">
                      {s.ctaLabel} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready for ${service.title.toLowerCase()}?`}
        subtitle="Call us today to discuss your project. We will assess the work and get it done safely and correctly."
      />
    </>
  );
}
