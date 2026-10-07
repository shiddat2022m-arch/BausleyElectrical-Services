import { Link } from 'react-router-dom';
import { ShieldCheck, MessageSquare, Wrench, MapPin, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { BUSINESS, IMAGES } from '@/data/images';

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Bausley Electrical Services in Valley, Alabama"
        description="Learn about Bausley Electrical Services, a locally based electrical business serving Valley, Alabama and surrounding communities with safe, reliable residential electrical work."
        path="/about"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 py-20">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-electric-500/10 blur-3xl" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-electric-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-electric-400">
              About Us
            </span>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">About Bausley Electrical Services</h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-200">
              A locally based electrical business serving homeowners in Valley, Alabama and the surrounding communities.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <img
                src={IMAGES.electricianWorkshop}
                alt="Electrician working with professional electrical tools"
                loading="lazy"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <span className="section-label">Who We Are</span>
              <h2 className="mt-4 text-3xl font-bold text-navy-900">Locally Based, Focused on Residential Electrical Work</h2>
              <p className="mt-6 text-lg leading-relaxed text-charcoal-600">
                Bausley Electrical Services is an electrical business based in Valley, Alabama. We focus on residential electrical installation, repair, and troubleshooting for homeowners in Valley and the surrounding communities in Chambers County and nearby areas.
              </p>
              <p className="mt-4 leading-relaxed text-charcoal-600">
                Our approach is straightforward: we listen to what you need, assess the work honestly, and perform it safely and carefully. We believe in doing work that meets code, communicating clearly about what we find, and treating your home with respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-charcoal-50 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">What We Stand For</span>
            <h2 className="mt-4 text-3xl font-bold text-navy-900">Our Commitment to You</h2>
            <p className="mt-4 text-lg text-charcoal-600">
              Three principles guide every job we do.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900">
                <ShieldCheck className="h-7 w-7 text-electric-400" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy-900">Workmanship</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                We take pride in electrical work that is safe, secure, and built to last. Every installation and repair follows current code requirements, and we test our work to make sure it functions correctly before we consider the job done.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900">
                <MessageSquare className="h-7 w-7 text-electric-400" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy-900">Clear Communication</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                We explain what we find, what the options are, and what the work involves — in plain language. No jargon, no pressure, no surprise charges. You will understand the scope and the reasoning before we start.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900">
                <Wrench className="h-7 w-7 text-electric-400" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy-900">Dependable Service</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                When we say we will be there, we show up. We treat your home with care, clean up when we finish, and stand behind the work we do. We are a local business, and our reputation in the community matters to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service area & contact */}
      <section className="py-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-2xl border border-charcoal-200 bg-white p-8">
              <MapPin className="h-8 w-8 text-electric-600" />
              <h2 className="mt-4 text-2xl font-bold text-navy-900">Our Location</h2>
              <p className="mt-4 text-charcoal-600">
                We are based at <strong>{BUSINESS.address}</strong>. From our location in Valley, we serve homeowners throughout Chambers County and nearby communities.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-electric-600" />
                  <span className="text-sm text-charcoal-700">Valley, Alabama — our home base</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-electric-600" />
                  <span className="text-sm text-charcoal-700">Chambers County and surrounding areas</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-electric-600" />
                  <span className="text-sm text-charcoal-700">Nearby communities in Lee County, AL and Troup County, GA</span>
                </div>
              </div>
              <Link to="/service-areas" className="btn-secondary mt-6">
                View All Service Areas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl bg-navy-900 p-8 text-white">
              <Phone className="h-8 w-8 text-electric-400" />
              <h2 className="mt-4 text-2xl font-bold">Get in Touch</h2>
              <p className="mt-4 text-navy-200">
                Have an electrical project or a problem that needs attention? Call us or send a message through our contact form.
              </p>
              <div className="mt-6 space-y-4">
                <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-3 rounded-lg bg-navy-800 p-4 transition-colors hover:bg-navy-700">
                  <Phone className="h-5 w-5 text-electric-400" />
                  <div>
                    <p className="text-xs text-navy-300">Phone</p>
                    <p className="font-bold">{BUSINESS.phone}</p>
                  </div>
                </a>
                <Link to="/contact" className="flex items-center gap-3 rounded-lg bg-navy-800 p-4 transition-colors hover:bg-navy-700">
                  <MessageSquare className="h-5 w-5 text-electric-400" />
                  <div>
                    <p className="text-xs text-navy-300">Contact</p>
                    <p className="font-bold">Send Us a Message</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
