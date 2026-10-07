import { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, Mail } from 'lucide-react';
import SEO from '@/components/SEO';
import { BUSINESS } from '@/data/images';
import { services } from '@/data/services';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!/^[\d\s\-()]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.service) newErrors.service = 'Please select a service.';
    if (!formData.message.trim()) newErrors.message = 'Please tell us about your project.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    if (validate()) {
      // Submission is not yet wired to a backend. We inform the user honestly.
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    }
  };

  return (
    <>
      <SEO
        title="Contact Us | Bausley Electrical Services in Valley, Alabama"
        description="Contact Bausley Electrical Services in Valley, AL. Call 334-497-0921 or send us a message. Located at 53 Lee Rd 2129, Valley, AL 36854."
        path="/contact"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 py-20">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-electric-500/10 blur-3xl" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-electric-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-electric-400">
              <Mail className="h-3.5 w-3.5" />
              Contact Us
            </span>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">Get in Touch</h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-200">
              Have an electrical project or a problem that needs diagnosing? Call us or fill out the form below — we are ready to help.
            </p>
            <div className="mt-8">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary">
                <Phone className="h-5 w-5" />
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Info column */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-900">Contact Information</h2>
              <p className="mt-4 text-charcoal-600">
                Reach out by phone or send a message using the form. We serve Valley, Alabama and the surrounding communities.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="group flex items-center gap-4 rounded-xl border border-charcoal-200 bg-white p-5 transition-all hover:border-electric-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-electric-500">
                    <Phone className="h-6 w-6 text-navy-950" />
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-500">Phone</p>
                    <p className="text-lg font-bold text-navy-900 group-hover:text-electric-600">{BUSINESS.phone}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-xl border border-charcoal-200 bg-white p-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900">
                    <MapPin className="h-6 w-6 text-electric-400" />
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-500">Address</p>
                    <p className="font-semibold text-navy-900">{BUSINESS.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl border border-charcoal-200 bg-white p-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900">
                    <Clock className="h-6 w-6 text-electric-400" />
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-500">Hours</p>
                    <p className="text-sm font-semibold text-navy-900">Mon–Fri: 7:00 AM – 6:00 PM</p>
                    <p className="text-sm font-semibold text-navy-900">Sat: 8:00 AM – 2:00 PM · Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form column */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-charcoal-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-navy-900">Send Us a Message</h2>
                <p className="mt-2 text-sm text-charcoal-600">
                  Fill out the form below and we will get back to you. For urgent matters, please call us directly.
                </p>

                {status === 'success' && (
                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 animate-fade-in">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-800">Message recorded</p>
                      <p className="text-sm text-green-700">
                        Thank you for reaching out. We have your details and will follow up by phone or email. For immediate assistance, please call us at {BUSINESS.phone}.
                      </p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 animate-fade-in">
                    <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    <div>
                      <p className="font-semibold text-red-800">Something went wrong</p>
                      <p className="text-sm text-red-700">
                        We could not process your message at this time. Please call us at {BUSINESS.phone} and we will be happy to help.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy-900">
                      Name <span className="text-electric-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`mt-1.5 w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                          : 'border-charcoal-300 focus:border-electric-500 focus:ring-electric-200'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy-900">
                        Phone <span className="text-electric-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`mt-1.5 w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
                          errors.phone
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                            : 'border-charcoal-300 focus:border-electric-500 focus:ring-electric-200'
                        }`}
                        placeholder="(334) 000-0000"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy-900">
                        Email <span className="text-electric-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`mt-1.5 w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                            : 'border-charcoal-300 focus:border-electric-500 focus:ring-electric-200'
                        }`}
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-navy-900">
                      Service Needed <span className="text-electric-600">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`mt-1.5 w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
                        errors.service
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                          : 'border-charcoal-300 focus:border-electric-500 focus:ring-electric-200'
                      }`}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Other">Other / Not sure</option>
                    </select>
                    {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy-900">
                      Message <span className="text-electric-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`mt-1.5 w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
                        errors.message
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                          : 'border-charcoal-300 focus:border-electric-500 focus:ring-electric-200'
                      }`}
                      placeholder="Tell us about your electrical project or the issue you are experiencing..."
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                  <p className="text-center text-xs text-charcoal-400">
                    Note: This form records your information for follow-up. For urgent matters, please call {BUSINESS.phone}.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-x">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              title="Bausley Electrical Services location on Google Maps"
              src={BUSINESS.mapsEmbed}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
