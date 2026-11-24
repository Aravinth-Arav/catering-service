import { useEffect, useState } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

const links = [
  { href: '#about', label: 'Our Story' },
  { href: '#services', label: 'Services' },
  { href: '#menu', label: 'Menus' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#plan', label: 'Plan an Event' },
];

export default function Navbar({ onPlanClick }: { onPlanClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(43,37,32,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5 text-ink">
          <UtensilsCrossed className="h-6 w-6 text-saffron-600" strokeWidth={1.5} />
          <span className="font-display text-2xl font-semibold tracking-wide">Saffron &amp; Sage</span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-saffron-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <button
            onClick={onPlanClick}
            className="rounded-full bg-saffron-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-saffron-700 hover:shadow-lg hover:shadow-saffron-600/20"
          >
            Request a Quote
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-ink lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="animate-fade-in border-t border-ink/10 bg-cream lg:hidden">
          <ul className="space-y-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 font-display text-xl text-ink-soft"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => {
                  setOpen(false);
                  onPlanClick();
                }}
                className="w-full rounded-full bg-saffron-600 px-5 py-3 text-sm font-medium text-white"
              >
                Request a Quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
