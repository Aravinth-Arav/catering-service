import { useState } from 'react';
import { menuCategories } from '@/data/menu';

export default function MenuPreview() {
  const [active, setActive] = useState(menuCategories[0].id);
  const category = menuCategories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest2 text-saffron-600">
              The Menu
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl text-balance">
              A seasonal selection, priced per guest.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              These are starting points — every menu is customized after a tasting
              consultation. Mix any combination when you build your event.
            </p>
          </div>
        </div>

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {menuCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === c.id
                  ? 'bg-ink text-cream'
                  : 'bg-cream-dark text-ink-soft hover:bg-cream-dark/70'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Items */}
        <div key={category.id} className="mt-10 animate-fade-in">
          <p className="mb-8 font-display text-xl italic text-saffron-700">
            {category.blurb}
          </p>
          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="group flex items-baseline justify-between gap-4 border-b border-ink/10 pb-5"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-saffron-700">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-light">{item.description}</p>
                  {item.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-sage-100 px-2.5 py-0.5 text-xs font-medium capitalize text-sage-700"
                        >
                          {t.replace('-', ' ')}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-display text-2xl font-semibold text-saffron-600">
                    ${item.price}
                  </p>
                  <p className="text-xs text-ink-light">/ guest</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-ink-light">
          Prices are per guest and represent a starting point. Final pricing reflects
          your guest count, service style, and season.
        </p>
      </div>
    </section>
  );
}
