import { Link } from 'react-router-dom';
import { Phone, ArrowRight, MapPin, Clock, ShieldCheck, Lightbulb, Zap, Wrench, Search, CheckCircle2, MessageSquare, ClipboardCheck, Hammer, ChevronDown } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ServiceCard from '@/components/ServiceCard';
import { BUSINESS, IMAGES } from '@/data/images';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import { generalFaqs } from '@/data/faqs';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <SEO
        title="Bausley Electrical Services | Electrician in Valley, Alabama"
        description="Reliable electrical services in Valley, AL. Installation, repair, panel upgrades, wiring, lighting, and troubleshooting for homes. Call Bausley Electrical Services at 334-497-0921."
        path="/"
      />

      {/* Hero */}
      <section className="relative min-h-[600px] overflow-hidden bg-navy-900 lg:min-h-[680px]">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroElectrician}
            alt="Electrician working on a circuit breaker panel with professional tools"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/60" />
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>
        <div className="container-x relative flex min-h-[600px] items-center py-20 lg:min-h-[680px]">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-electric-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-electric-400 animate-fade-in-up">
              <MapPin className="h-3.5 w-3.5" />
              Serving Valley, Alabama
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white animate-fade-in-up delay-100 sm:text-5xl lg:text-6xl">
              Reliable Electrical Services in <span className="text-electric-400">Valley, Alabama</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200 animate-fade-in-up delay-200">
              From installations and upgrades to repairs and troubleshooting, Bausley Electrical Services delivers safe, dependable electrical work for your home — with clear communication and honest recommendations.
            </p>
            <div className="mt-8 flex flex-col gap-4 animate-fade-in-up delay-300 sm:flex-row">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary text-base">
                <Phone className="h-5 w-5" />
                Call {BUSINESS.phone}
              </a>
              <Link to="/services" className="btn-outline-light">
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 animate-fade-in-up delay-400">
              <div className="flex items-center gap-2 text-sm text-navy-200">
                <ShieldCheck className="h-5 w-5 text-electric-400" />
                Safety-first workmanship
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-200">
                <CheckCircle2 className="h-5 w-5 text-electric-400" />
                Code-compliant installations
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-200">
                <MessageSquare className="h-5 w-5 text-electric-400" />
                Clear, honest communication
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / About preview */}
      <section className="py-20">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <img
                src={IMAGES.electricianPortrait}
                alt="Professional electrician working on residential wiring"
                loading="lazy"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-electric-500 p-6 shadow-xl md:block">
                <p className="text-4xl font-bold text-navy-950">100%</p>
                <p className="text-sm font-semibold text-navy-800">Commitment to safe, clean work</p>
              </div>
            </div>
            <div>
              <span className="section-label">About Bausley Electrical</span>
              <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">Your Local Electrical Team in Valley, Alabama</h2>
              <p className="mt-6 text-lg leading-relaxed text-charcoal-600">
                Bausley Electrical Services is a locally based electrical business serving homeowners in Valley, Alabama, and the surrounding communities. We focus on residential electrical installation, repair, and troubleshooting — handling every project with attention to detail, safe work practices, and straightforward communication.
              </p>
              <p className="mt-4 leading-relaxed text-charcoal-600">
                Whether you need a new circuit installed, a panel upgraded, or a persistent electrical problem diagnosed, we take the time to understand what you need, explain the work clearly, and get it done right.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-electric-600" />
                  <span className="text-sm font-medium text-charcoal-700">Safety-conscious service on every job</span>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="mt-0.5 h-5 w-5 flex-shrink-0 text-electric-600" />
                  <span className="text-sm font-medium text-charcoal-700">Clear explanations, no pressure</span>
                </div>
                <div className="flex items-start gap-3">
                  <Wrench className="mt-0.5 h-5 w-5 flex-shrink-0 text-electric-600" />
                  <span className="text-sm font-medium text-charcoal-700">Careful, thorough workmanship</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-electric-600" />
                  <span className="text-sm font-medium text-charcoal-700">Code-compliant installations</span>
                </div>
              </div>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-electric-600 transition-colors hover:text-electric-700">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-charcoal-50 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Our Services</span>
            <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">Electrical Services for Your Home</h2>
            <p className="mt-4 text-lg text-charcoal-600">
              We handle a full range of residential electrical needs — from new installations to complex diagnostics and repairs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Why Choose Us</span>
            <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">Dependable Service, Done Right</h2>
            <p className="mt-4 text-lg text-charcoal-600">
              We focus on the things that matter most: safe workmanship, clear communication, and electrical service you can rely on.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: ShieldCheck, title: 'Safety-First Workmanship', body: 'Every installation and repair follows current electrical code requirements. We take the time to do work that is safe, secure, and built to last.' },
              { icon: MessageSquare, title: 'Clear Communication', body: 'We explain what we find, what the options are, and what the work involves — in plain language, with no pressure and no surprise charges.' },
              { icon: Wrench, title: 'Dependable Service', body: 'When we say we will be there, we show up. We treat your home with respect and leave the work area clean when we finish.' },
              { icon: Search, title: 'Thorough Diagnostics', body: 'We do not guess — we test. Our troubleshooting process finds the actual cause of the problem so it gets fixed right the first time.' },
              { icon: Zap, title: 'Residential Focus', body: 'We specialize in home electrical systems. From single outlets to whole-home wiring, we understand the needs of homeowners.' },
              { icon: MapPin, title: 'Locally Based', body: 'We are based in Valley, Alabama, and serve the surrounding communities. When you call, you are talking to a local business.' },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-charcoal-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-electric-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 transition-colors duration-300 group-hover:bg-electric-500">
                  <item.icon className="h-6 w-6 text-electric-400 transition-colors duration-300 group-hover:text-navy-950" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential section */}
      <section className="bg-navy-900 py-20">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <span className="section-label">Residential Electrical</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Installation and Repair for Your Home</h2>
              <p className="mt-6 text-lg leading-relaxed text-navy-200">
                Your home's electrical system powers everything you do. We handle the full range of residential electrical work — from installing new circuits and upgrading panels to repairing outlets and replacing old wiring.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'New circuit and wiring installation',
                  'Panel upgrades and breaker replacement',
                  'Outlet, switch, and lighting installation',
                  'Ceiling fan installation and repair',
                  'Troubleshooting and fault diagnosis',
                  'Safety improvements and grounding upgrades',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-electric-400" />
                    <span className="text-navy-100">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/services" className="btn-primary mt-8">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
              <img src={IMAGES.wiringInstall} alt="Electrician installing wiring in a wall" loading="lazy" className="rounded-xl shadow-lg" />
              <img src={IMAGES.outletDrill} alt="Installing an electrical outlet with a drill" loading="lazy" className="mt-8 rounded-xl shadow-lg" />
              <img src={IMAGES.panelOrganized} alt="Organized circuit breaker panel" loading="lazy" className="rounded-xl shadow-lg" />
              <img src={IMAGES.kitchenPendant} alt="Modern kitchen with pendant lighting" loading="lazy" className="mt-8 rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Troubleshooting */}
      <section className="py-20">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <img src={IMAGES.electricianMultimeter} alt="Electrician using a multimeter for electrical diagnostics" loading="lazy" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <span className="section-label">Safety & Troubleshooting</span>
              <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">Finding and Fixing Electrical Problems</h2>
              <p className="mt-6 text-lg leading-relaxed text-charcoal-600">
                Electrical issues can be frustrating and sometimes dangerous. Our diagnostic process is thorough and systematic — we test, trace, and isolate the problem before recommending a repair.
              </p>
              <div className="mt-8 rounded-2xl border border-electric-200 bg-electric-50 p-6">
                <h3 className="flex items-center gap-2 font-bold text-navy-900">
                  <ShieldCheck className="h-5 w-5 text-electric-600" />
                  Warning signs to watch for:
                </h3>
                <ul className="mt-4 space-y-2">
                  {[
                    'Breakers that trip frequently',
                    'Outlets or switches that feel warm',
                    'Flickering or dimming lights',
                    'Burning smell or unusual odors near outlets',
                    'Sparks or buzzing from switches or outlets',
                  ].map((sign) => (
                    <li key={sign} className="flex items-start gap-2 text-sm text-charcoal-700">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-electric-500" />
                      {sign}
                    </li>
                  ))}
                </ul>
                <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary mt-5">
                  <Phone className="h-4 w-4" />
                  Call About Your Issue
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-charcoal-50 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Our Process</span>
            <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">How We Work</h2>
            <p className="mt-4 text-lg text-charcoal-600">
              A straightforward process from first call to finished work — no surprises, no confusion.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { icon: MessageSquare, step: '01', title: 'Discuss Your Project', body: 'Call us to talk through what you need. We listen to the details, ask the right questions, and schedule a visit.' },
              { icon: ClipboardCheck, step: '02', title: 'Assess the Work', body: 'We inspect the site, diagnose any issues, and explain what the job requires — with clear options and straightforward pricing.' },
              { icon: Hammer, step: '03', title: 'Complete the Service', body: 'We perform the work safely and cleanly, test everything to make sure it works correctly, and leave your home in good shape.' },
            ].map((item) => (
              <div key={item.step} className="relative rounded-2xl bg-white p-8 shadow-sm">
                <span className="absolute right-6 top-6 text-5xl font-bold text-charcoal-100">{item.step}</span>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900">
                  <item.icon className="h-7 w-7 text-electric-400" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews note */}
      <section className="py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl rounded-3xl border border-charcoal-200 bg-white p-12 text-center shadow-sm">
            <span className="section-label">Customer Feedback</span>
            <h2 className="mt-4 text-3xl font-bold text-navy-900">What Our Customers Say</h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-600">
              We value honest feedback from the homeowners we serve. To read genuine customer reviews, please visit our Google Business listing — we do not display reviews on this page to ensure every review you see is authentic and verifiable.
            </p>
            <a
              href={BUSINESS.mapsListing}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-8"
            >
              <MapPin className="h-4 w-4" />
              View Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-charcoal-50 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Service Areas</span>
            <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">Areas We Serve</h2>
            <p className="mt-4 text-lg text-charcoal-600">
              Based in Valley, Alabama, we serve homeowners throughout the surrounding communities in Chambers County and nearby areas.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.slice(0, 6).map((area) => (
              <Link
                key={area.slug}
                to={`/service-areas/${area.slug}`}
                className="group flex items-center justify-between rounded-xl border border-charcoal-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-electric-300 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-electric-600" />
                    <span className="font-bold text-navy-900">{area.name}</span>
                  </div>
                  <p className="mt-1 text-xs text-charcoal-500">{area.distance}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-charcoal-400 transition-all group-hover:translate-x-1 group-hover:text-electric-600" />
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/service-areas" className="btn-secondary">
              View All Service Areas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="section-label">FAQs</span>
              <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-charcoal-600">
                Common questions about our electrical services. Do not see yours? Give us a call.
              </p>
            </div>
            <div className="mt-10 space-y-3">
              {generalFaqs.slice(0, 6).map((faq, i) => (
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
            <div className="mt-8 text-center">
              <Link to="/faqs" className="inline-flex items-center gap-2 font-semibold text-electric-600 transition-colors hover:text-electric-700">
                View All FAQs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Map & Contact */}
      <section className="py-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="section-label">Contact Us</span>
              <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">Get in Touch</h2>
              <p className="mt-6 text-lg text-charcoal-600">
                Have an electrical project or a problem that needs diagnosing? Call us or send a message — we are ready to help.
              </p>
              <div className="mt-8 space-y-5">
                <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-4 rounded-xl border border-charcoal-200 bg-white p-5 transition-all hover:border-electric-300 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-500">
                    <Phone className="h-6 w-6 text-navy-950" />
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-500">Phone</p>
                    <p className="text-lg font-bold text-navy-900">{BUSINESS.phone}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-xl border border-charcoal-200 bg-white p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900">
                    <MapPin className="h-6 w-6 text-electric-400" />
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-500">Address</p>
                    <p className="font-semibold text-navy-900">{BUSINESS.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl border border-charcoal-200 bg-white p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900">
                    <Clock className="h-6 w-6 text-electric-400" />
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-500">Hours</p>
                    <p className="font-semibold text-navy-900">Mon–Fri: 7AM–6PM | Sat: 8AM–2PM | Sun: Closed</p>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="btn-primary mt-6">
                Send Us a Message
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <iframe
                title="Bausley Electrical Services location map"
                src={BUSINESS.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
