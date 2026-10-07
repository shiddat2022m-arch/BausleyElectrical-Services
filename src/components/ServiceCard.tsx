import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS } from '@/data/images';
import * as Icons from 'lucide-react';
import type { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = (Icons[service.icon as keyof typeof Icons] || Icons.Zap) as Icons.LucideIcon;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading={index < 3 ? 'eager' : 'lazy'}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
        <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-lg bg-electric-500 shadow-lg">
          <Icon className="h-6 w-6 text-navy-950" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-navy-900">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-600">{service.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 transition-colors group-hover:text-electric-700">
          {service.ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function ClickToCallCard() {
  return (
    <a
      href={`tel:${BUSINESS.phoneRaw}`}
      className="group flex items-center gap-4 rounded-2xl bg-navy-900 p-6 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-electric-500">
        <Phone className="h-7 w-7 text-navy-950" />
      </div>
      <div>
        <p className="text-sm text-navy-300">Call us today</p>
        <p className="text-xl font-bold">{BUSINESS.phone}</p>
      </div>
      <ArrowRight className="ml-auto h-5 w-5 text-electric-400 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
