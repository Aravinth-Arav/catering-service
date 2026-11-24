import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer({ onPlanClick }: { onPlanClick: () => void }) {
  return (
    <footer className="bg-ink text-cream/80">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-8xl flex-col items-center gap-6 px-6 py-16 text-center lg:px-10">
          <h2 className="font-display text-4xl font-medium text-cream sm:text-5xl text-balance">
            Let’s design a menu worthy of your occasion.
          </h2>
          <p className="max-w-xl text-cream/70">
            Build your event in a few guided steps — choose your service style, select
            dishes, and get a live estimate. We follow up within one business day.
          </p>
          <button
            onClick={onPlanClick}
            className="rounded-full bg-saffron-600 px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-saffron-700 hover:shadow-lg hover:shadow-saffron-600/30"
          >
            Start Planning
          </button>
        </div>
      </div>

      {/* Contact grid */}
      <div className="mx-auto grid max-w-8xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="flex items-center gap-2 text-cream">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-saffron-400">
              <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-display text-2xl font-semibold">Saffron &amp; Sage</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/60">
            Artisan catering studio. Seasonal menus, considered service, and a table
            set just for you.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-cream">Visit</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron-400" />
              <span>418 Orchard Lane<br />Hudson Valley, NY 12534</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-saffron-400" />
              <span>By appointment<br />Tue–Sat, 10am–6pm</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-cream">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-saffron-400" />
              <a href="tel:+18455550142" className="transition-colors hover:text-cream">
                (845) 555-0142
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-saffron-400" />
              <a href="mailto:hello@saffronsage.co" className="transition-colors hover:text-cream">
                hello@saffronsage.co
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-cream">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href="#about" className="transition-colors hover:text-cream">Our Story</a></li>
            <li><a href="#services" className="transition-colors hover:text-cream">Services</a></li>
            <li><a href="#menu" className="transition-colors hover:text-cream">Menu</a></li>
            <li><a href="#gallery" className="transition-colors hover:text-cream">Gallery</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-2 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Saffron &amp; Sage Catering. All rights reserved.</p>
          <p>Crafted with seasonal ingredients &amp; attention to detail.</p>
        </div>
      </div>
    </footer>
  );
}
