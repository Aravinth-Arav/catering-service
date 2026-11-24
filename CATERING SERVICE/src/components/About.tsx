import { Leaf, Clock, Users, Award } from 'lucide-react';

const stats = [
  { icon: Leaf, value: '100%', label: 'Seasonal sourcing' },
  { icon: Clock, value: '12 yrs', label: 'Crafting events' },
  { icon: Users, value: '1,400+', label: 'Celebrations served' },
  { icon: Award, value: 'Featured', label: 'Regional culinary awards' },
];

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div className="animate-fade-up">
            <p className="text-sm font-medium uppercase tracking-widest2 text-saffron-600">
              Our Story
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl text-balance">
              A kitchen built around the season, not the freezer.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Saffron &amp; Sage began with a simple belief: that catering should
                taste like a restaurant, not like a banquet hall. We build every menu
                from the market up — choosing produce at its peak, then writing the
                menu around it.
              </p>
              <p>
                From a thirty-person dinner in a candlelit loft to a four-hundred-guest
                wedding under a tent, the philosophy stays the same: cook with intention,
                serve with warmth, and leave the table feeling like the evening was
                made just for them.
              </p>
            </div>
          </div>

          {/* Image collage */}
          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/4253300/pexels-photo-4253300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Chefs in a professional kitchen"
                className="aspect-[3/4] w-full rounded-2xl object-cover shadow-lg"
              />
              <div className="mt-10 grid gap-4">
                <img
                  src="https://images.pexels.com/photos/667074/pexels-photo-667074.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Gourmet canapés on a tray"
                  className="aspect-square w-full rounded-2xl object-cover shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/17294719/pexels-photo-17294719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Gourmet buffet with floral arrangements"
                  className="aspect-square w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-saffron-600 px-6 py-5 text-white shadow-xl sm:block">
              <p className="font-display text-3xl font-semibold leading-none">Farm</p>
              <p className="font-display text-3xl font-semibold leading-none text-saffron-100">
                to Table
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-cream-dark lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-cream px-6 py-8 text-center">
              <Icon className="mx-auto h-7 w-7 text-saffron-600" strokeWidth={1.5} />
              <p className="mt-3 font-display text-3xl font-semibold text-ink">{value}</p>
              <p className="mt-1 text-sm text-ink-light">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
