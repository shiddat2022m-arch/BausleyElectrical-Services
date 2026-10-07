import { Link } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle2, Wrench } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ServiceCard from '@/components/ServiceCard';
import { BUSINESS } from '@/data/images';
import { services } from '@/data/services';

export default function ServicesLanding() {
  return (
    <>
      <SEO
        title="Electrical Services in Valley, AL | Bausley Electrical Services"
        description="Complete residential electrical services in Valley, Alabama: installation, repair, panel upgrades, wiring, lighting, ceiling fans, grounding, and diagnostics. Call 334-497-0921."
        path="/services"
      />

      {/* Page header */}
      <section className="relative overflow-hidden bg-navy-900 py-20">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-electric-500/10 blur-3xl" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-electric-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-electric-400">
              <Wrench className="h-3.5 w-3.5" />
              Our Services
            </span>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">Electrical Services in Valley, Alabama</h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-200">
              From new installations to complex diagnostics, we provide a full range of residential electrical services for homeowners in Valley and the surrounding communities.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary">
                <Phone className="h-5 w-5" />
                Call {BUSINESS.phone}
              </a>
              <Link to="/contact" className="btn-outline-light">
                Request a Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-navy-900">What We Do</h2>
            <p className="mt-4 text-lg text-charcoal-600">
              Click any service below to learn more about what it includes, common warning signs, and answers to frequently asked questions.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process summary */}
      <section className="bg-charcoal-50 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-navy-900">How It Works</h2>
            <p className="mt-4 text-lg text-charcoal-600">Three simple steps from first call to finished work.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { step: '01', title: 'Discuss Your Project', body: 'Call us to explain what you need. We ask the right questions and schedule a visit.' },
              { step: '02', title: 'Assess the Work', body: 'We inspect the site, diagnose issues, and present clear options with honest pricing.' },
              { step: '03', title: 'Complete the Service', body: 'We do the work safely, test everything, and leave your home clean and functional.' },
            ].map((item) => (
              <div key={item.step} className="relative rounded-2xl bg-white p-8 shadow-sm">
                <span className="absolute right-6 top-6 text-5xl font-bold text-charcoal-100">{item.step}</span>
                <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Service You Need?"
        subtitle="Call us and describe the issue — we will help you figure out what is going on and recommend the right service."
      />
    </>
  );
}
