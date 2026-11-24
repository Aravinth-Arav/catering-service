import { ArrowRight } from 'lucide-react';

export default function Hero({
  onPlanClick,
}: {
  onPlanClick: () => void;
}) {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/29486068/pexels-photo-29486068.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Elegant catering buffet spread"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/35 to-ink/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-8xl flex-col justify-center px-6 pt-28 pb-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="animate-fade-up text-sm font-medium uppercase tracking-widest2 text-saffron-200">
            Artisan Catering Studio
          </p>
          <h1 className="animate-fade-up mt-5 font-display text-5xl font-medium leading-[1.05] text-white text-balance sm:text-6xl lg:text-7xl">
            Every dish tells the story of your celebration.
          </h1>
          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-cream/90">
            Seasonal menus, considered service, and a kitchen that treats each event
            as a once-in-a-lifetime occasion — because for you, it is.
          </p>
          <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={onPlanClick}
              className="group inline-flex items-center gap-2 rounded-full bg-saffron-600 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-saffron-700 hover:shadow-xl hover:shadow-saffron-900/30"
            >
              Build Your Event
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href="#menu"
              className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Explore the Menu
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 sm:flex">
        <span className="text-xs uppercase tracking-widest2">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-white/50" />
      </div>
    </section>
  );
}
