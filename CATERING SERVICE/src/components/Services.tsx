const services = [
  {
    title: 'Weddings',
    description:
      'Rehearsal dinners, receptions, and next-day brunches — menus tailored to your day, your venue, and your story.',
    image: 'https://images.pexels.com/photos/17001777/pexels-photo-17001777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Tasting consultation', 'Custom menu design', 'Full service staff'],
  },
  {
    title: 'Corporate',
    description:
      'Working lunches, product launches, and holiday gatherings that make the office forget it is the office.',
    image: 'https://images.pexels.com/photos/8629103/pexels-photo-8629103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Flexible formats', 'On-time delivery', 'Dietary accommodations'],
  },
  {
    title: 'Private Events',
    description:
      'Anniversaries, milestone birthdays, and intimate dinners where the food is the centerpiece of the memory.',
    image: 'https://images.pexels.com/photos/28976229/pexels-photo-28976229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Personal chef option', 'Bespoke courses', 'Tableside service'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream-deep py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest2 text-saffron-600">
            What We Do
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl text-balance">
            Three ways we set the table.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group animate-fade-up overflow-hidden rounded-2xl bg-cream shadow-sm transition-all duration-500 hover:shadow-xl [animation-delay:${i * 120}ms]"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{s.description}</p>
                <ul className="mt-5 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-ink-light">
                      <span className="h-1.5 w-1.5 rounded-full bg-saffron-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
