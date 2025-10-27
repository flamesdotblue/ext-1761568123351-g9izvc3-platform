export default function Hero({ title, subtitle, cta }) {
  const images = [
    'https://images.unsplash.com/photo-1582994994021-6f980c2a5480?q=80&w=2060&auto=format&fit=crop', // Yerevan Cascade
    'https://images.unsplash.com/photo-1569428129412-67f3b50e5ce1?q=80&w=2060&auto=format&fit=crop', // Mount Ararat view
    'https://images.unsplash.com/photo-1568667256531-7d5ac292b266?q=80&w=2060&auto=format&fit=crop', // Monastery
  ]

  return (
    <div className="relative isolate">
      <div className="relative h-[64vh] w-full overflow-hidden rounded-b-[2rem] bg-slate-200 shadow-sm sm:h-[70vh] md:h-[78vh]">
        <div className="absolute inset-0">
          <img
            src={images[0]}
            alt="Yerevan panorama"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 py-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow md:text-6xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90 md:text-xl">{subtitle}</p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#destinations" className="inline-flex items-center rounded-lg bg-rose-600 px-5 py-3 text-white shadow-sm transition hover:bg-rose-700">{cta}</a>
            <a href="#gallery" className="inline-flex items-center rounded-lg bg-white/90 px-5 py-3 text-slate-900 shadow-sm ring-1 ring-black/10 transition hover:bg-white">Gallery</a>
          </div>
        </div>
      </div>

      <div className="mx-auto -mt-8 grid max-w-6xl grid-cols-2 gap-4 px-6 sm:-mt-12 md:-mt-16 md:grid-cols-3">
        <img src={images[1]} alt="Mount Ararat" className="h-44 w-full rounded-xl object-cover shadow md:h-56" />
        <img src={images[2]} alt="Ancient monastery" className="h-44 w-full rounded-xl object-cover shadow md:h-56" />
        <img src="https://images.unsplash.com/photo-1702675231835-ba8c6136b173?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMYWtlJTIwU2V2YW58ZW58MHwwfHx8MTc2MTU2ODIwNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Lake Sevan" className="hidden h-44 w-full rounded-xl object-cover shadow md:block md:h-56" />
      </div>
    </div>
  )
}
