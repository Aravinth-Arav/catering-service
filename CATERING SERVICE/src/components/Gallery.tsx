const gallery = [
  { src: 'https://images.pexels.com/photos/34307855/pexels-photo-34307855.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Luxurious buffet with smoked salmon and cheese', span: 'lg:col-span-2 lg:row-span-2' },
  { src: 'https://images.pexels.com/photos/27774175/pexels-photo-27774175.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Plated vegetarian dish with herbs', span: '' },
  { src: 'https://images.pexels.com/photos/29944215/pexels-photo-29944215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Canapés and hors d\u2019oeuvres platter', span: '' },
  { src: 'https://images.pexels.com/photos/20545314/pexels-photo-20545314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Gourmet ravioli in creamy tomato sauce', span: '' },
  { src: 'https://images.pexels.com/photos/38036576/pexels-photo-38036576.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Outdoor buffet with flowers', span: 'lg:col-span-2' },
  { src: 'https://images.pexels.com/photos/32476151/pexels-photo-32476151.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Elegant wedding table with crystal glasses', span: '' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream-deep py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest2 text-saffron-600">
            The Table
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl text-balance">
            Moments from our recent tables.
          </h2>
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl ${g.span}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
