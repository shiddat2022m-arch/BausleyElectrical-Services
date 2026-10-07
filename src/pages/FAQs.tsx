import { Link } from 'react-router-dom';
import { Phone, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { BUSINESS } from '@/data/images';
import { generalFaqs } from '@/data/faqs';
import { services } from '@/data/services';
import { useState } from 'react';

export default function FAQs() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <SEO
        title="FAQs | Bausley Electrical Services in Valley, Alabama"
        description="Frequently asked questions about our electrical services in Valley, AL. Service areas, estimates, emergency calls, panel upgrades, and more. Call 334-497-0921."
        path="/faqs"
        jsonLd={[{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: generalFaqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 py-20">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-electric-500/10 blur-3xl" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-electric-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-electric-400">
              <HelpCircle className="h-3.5 w-3.5" />
              FAQs
            </span>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">Frequently Asked Questions</h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-200">
              Answers to common questions about our electrical services, service areas, and how we work.
            </p>
          </div>
        </div>
      </section>

      {/* General FAQs */}
      <section className="py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-navy-900">General Questions</h2>
            <div className="mt-8 space-y-3">
              {generalFaqs.map((faq, i) => (
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

            {/* Service-specific FAQs */}
            <h2 className="mt-12 text-2xl font-bold text-navy-900">Service-Specific Questions</h2>
            <p className="mt-3 text-charcoal-600">
              Each of our service pages includes its own set of FAQs. Explore the services below for detailed answers.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="flex items-center justify-between rounded-xl border border-charcoal-200 bg-white p-4 transition-all hover:border-electric-300 hover:shadow-sm"
                >
                  <span className="font-medium text-navy-900">{s.shortTitle}</span>
                  <ChevronDown className="h-5 w-5 text-electric-600" />
                </Link>
              ))}
            </div>

            {/* Still have questions */}
            <div className="mt-12 rounded-2xl bg-navy-900 p-8 text-center text-white">
              <MessageSquare className="mx-auto h-10 w-10 text-electric-400" />
              <h3 className="mt-4 text-xl font-bold">Still Have Questions?</h3>
              <p className="mt-2 text-navy-200">
                We are happy to help. Call us and we will answer any questions you have about your electrical project.
              </p>
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary mt-6">
                <Phone className="h-5 w-5" />
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
