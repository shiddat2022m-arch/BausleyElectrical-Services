import { Link } from 'react-router-dom';
import { Phone, MapPin, Zap, Clock, Mail } from 'lucide-react';
import { BUSINESS } from '@/data/images';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      {/* CTA bar */}
      <div className="border-b border-navy-800">
        <div className="container-x py-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="text-2xl font-bold text-white">Need an electrician in Valley, AL?</h3>
              <p className="mt-1 text-navy-300">Call us today — we are ready to help with your electrical project.</p>
            </div>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary text-base">
              <Phone className="h-5 w-5" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-x py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500">
                <Zap className="h-6 w-6 text-navy-950" />
              </div>
              <div className="leading-tight">
                <span className="block font-display text-lg font-bold">Bausley</span>
                <span className="block text-[10px] font-medium uppercase tracking-wider text-electric-400">Electrical Services</span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-navy-300">
              Residential electrical installation, repair, and troubleshooting serving Valley, Alabama and surrounding communities.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-navy-300 transition-colors hover:text-electric-400">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-sm font-semibold text-electric-400 transition-colors hover:text-electric-300">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Service Areas</h4>
            <ul className="mt-4 space-y-2">
              {serviceAreas.slice(0, 6).map((a) => (
                <li key={a.slug}>
                  <Link to={`/service-areas/${a.slug}`} className="text-sm text-navy-300 transition-colors hover:text-electric-400">
                    {a.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/service-areas" className="text-sm font-semibold text-electric-400 transition-colors hover:text-electric-300">
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-start gap-2.5 text-sm text-navy-300 transition-colors hover:text-electric-400">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-400" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-sm text-navy-300">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-400" />
                  {BUSINESS.address}
                </span>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-sm text-navy-300">
                  <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-400" />
                  <span>Mon–Fri: 7:00 AM – 6:00 PM<br />Sat: 8:00 AM – 2:00 PM<br />Sun: Closed</span>
                </span>
              </li>
              <li>
                <Link to="/contact" className="flex items-start gap-2.5 text-sm text-navy-300 transition-colors hover:text-electric-400">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-400" />
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="container-x py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-navy-400 md:flex-row">
            <p>&copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/services" className="transition-colors hover:text-electric-400">Services</Link>
              <Link to="/service-areas" className="transition-colors hover:text-electric-400">Service Areas</Link>
              <Link to="/about" className="transition-colors hover:text-electric-400">About</Link>
              <Link to="/contact" className="transition-colors hover:text-electric-400">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
