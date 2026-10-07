import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/images';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  showServicesLink?: boolean;
}

export default function CTASection({
  title = 'Ready to Get Started?',
  subtitle = 'Call us today to discuss your electrical project. We will assess the work, explain the options, and get the job done right.',
  buttonText = 'Call 334-497-0921',
  showServicesLink = true,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-electric-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-electric-500/10 blur-3xl" />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-navy-200">{subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary text-base">
              <Phone className="h-5 w-5" />
              {buttonText}
            </a>
            {showServicesLink && (
              <Link to="/services" className="btn-outline-light">
                Explore Our Services
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
