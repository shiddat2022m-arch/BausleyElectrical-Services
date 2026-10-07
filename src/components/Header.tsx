import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Zap } from 'lucide-react';
import { BUSINESS } from '@/data/images';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [areasDropdown, setAreasDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesDropdown(false);
    setAreasDropdown(false);
    setMobileServicesOpen(false);
    setMobileAreasOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden bg-navy-950 text-navy-200 lg:block">
        <div className="container-x flex items-center justify-between py-2 text-xs">
          <p className="flex items-center gap-2">
            <Zap className="h-3.5 w-3.5 text-electric-400" />
            Licensed electrical services in Valley, Alabama
          </p>
          <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-2 font-medium text-white transition-colors hover:text-electric-400">
            <Phone className="h-3.5 w-3.5" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/95 shadow-xl backdrop-blur-md' : 'bg-navy-900'
      }`}>
        <div className="container-x">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500 transition-transform duration-300 hover:scale-110">
                <Zap className="h-6 w-6 text-navy-950" />
              </div>
              <div className="leading-tight">
                <span className="block font-display text-lg font-bold">Bausley</span>
                <span className="block text-[10px] font-medium uppercase tracking-wider text-electric-400">Electrical Services</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              <Link
                to="/"
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-electric-400' : 'text-navy-100 hover:text-white'
                }`}
              >
                Home
              </Link>

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button
                  className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isActive('/services') ? 'text-electric-400' : 'text-navy-100 hover:text-white'
                  }`}
                >
                  Services <ChevronDown className="h-4 w-4" />
                </button>
                {servicesDropdown && (
                  <div className="absolute left-0 top-full w-72 rounded-xl border border-navy-700 bg-navy-800 p-2 shadow-2xl">
                    <Link to="/services" className="block rounded-lg px-3 py-2 text-sm font-semibold text-electric-400 transition-colors hover:bg-navy-700">
                      All Services →
                    </Link>
                    <div className="my-1 h-px bg-navy-700" />
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="block rounded-lg px-3 py-2 text-sm text-navy-100 transition-colors hover:bg-navy-700 hover:text-white"
                      >
                        {s.shortTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Areas dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAreasDropdown(true)}
                onMouseLeave={() => setAreasDropdown(false)}
              >
                <button
                  className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isActive('/service-areas') ? 'text-electric-400' : 'text-navy-100 hover:text-white'
                  }`}
                >
                  Service Areas <ChevronDown className="h-4 w-4" />
                </button>
                {areasDropdown && (
                  <div className="absolute left-0 top-full w-64 rounded-xl border border-navy-700 bg-navy-800 p-2 shadow-2xl">
                    <Link to="/service-areas" className="block rounded-lg px-3 py-2 text-sm font-semibold text-electric-400 transition-colors hover:bg-navy-700">
                      All Service Areas →
                    </Link>
                    <div className="my-1 h-px bg-navy-700" />
                    {serviceAreas.map((a) => (
                      <Link
                        key={a.slug}
                        to={`/service-areas/${a.slug}`}
                        className="block rounded-lg px-3 py-2 text-sm text-navy-100 transition-colors hover:bg-navy-700 hover:text-white"
                      >
                        {a.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-electric-400' : 'text-navy-100 hover:text-white'
                }`}
              >
                About Us
              </Link>

              <Link
                to="/faqs"
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive('/faqs') ? 'text-electric-400' : 'text-navy-100 hover:text-white'
                }`}
              >
                FAQs
              </Link>

              <Link
                to="/contact"
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive('/contact') ? 'text-electric-400' : 'text-navy-100 hover:text-white'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTA */}
            <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary hidden lg:inline-flex">
              <Phone className="h-4 w-4" />
              Call Now
            </a>

            {/* Mobile toggle */}
            <button
              className="rounded-lg p-2 text-white lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="max-h-[calc(100vh-80px)] overflow-y-auto bg-navy-900 lg:hidden">
            <div className="container-x py-4">
              <Link to="/" className="block rounded-lg px-3 py-2.5 text-base font-medium text-white hover:bg-navy-800">Home</Link>

              <button
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-white hover:bg-navy-800"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 border-l border-navy-700 pl-2">
                  <Link to="/services" className="block rounded-lg px-3 py-2 text-sm font-semibold text-electric-400 hover:bg-navy-800">All Services →</Link>
                  {services.map((s) => (
                    <Link key={s.slug} to={`/services/${s.slug}`} className="block rounded-lg px-3 py-2 text-sm text-navy-100 hover:bg-navy-800 hover:text-white">
                      {s.shortTitle}
                    </Link>
                  ))}
                </div>
              )}

              <button
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-white hover:bg-navy-800"
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
              >
                Service Areas <ChevronDown className={`h-4 w-4 transition-transform ${mobileAreasOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileAreasOpen && (
                <div className="ml-4 border-l border-navy-700 pl-2">
                  <Link to="/service-areas" className="block rounded-lg px-3 py-2 text-sm font-semibold text-electric-400 hover:bg-navy-800">All Service Areas →</Link>
                  {serviceAreas.map((a) => (
                    <Link key={a.slug} to={`/service-areas/${a.slug}`} className="block rounded-lg px-3 py-2 text-sm text-navy-100 hover:bg-navy-800 hover:text-white">
                      {a.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link to="/about" className="block rounded-lg px-3 py-2.5 text-base font-medium text-white hover:bg-navy-800">About Us</Link>
              <Link to="/faqs" className="block rounded-lg px-3 py-2.5 text-base font-medium text-white hover:bg-navy-800">FAQs</Link>
              <Link to="/contact" className="block rounded-lg px-3 py-2.5 text-base font-medium text-white hover:bg-navy-800">Contact</Link>

              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary mt-3 w-full">
                <Phone className="h-4 w-4" />
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
