import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Home as HomeIcon, Zap } from 'lucide-react';
import SEO from '@/components/SEO';
import { BUSINESS } from '@/data/images';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Bausley Electrical Services"
        description="The page you are looking for could not be found. Please visit our homepage or call us at 334-497-0921."
        path="/404"
      />
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy-900 py-20">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-electric-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-electric-500/10 blur-3xl" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-electric-500">
              <Zap className="h-9 w-9 text-navy-950" />
            </div>
            <h1 className="mt-8 text-6xl font-bold text-white sm:text-7xl">404</h1>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">Page Not Found</h2>
            <p className="mt-4 text-lg text-navy-200">
              The page you are looking for does not exist or may have been moved. Let&apos;s get you back on track.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/" className="btn-primary">
                <HomeIcon className="h-5 w-5" />
                Back to Home
              </Link>
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-outline-light">
                <Phone className="h-5 w-5" />
                Call {BUSINESS.phone}
              </a>
            </div>
            <div className="mt-8">
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-electric-400 transition-colors hover:text-electric-300">
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
