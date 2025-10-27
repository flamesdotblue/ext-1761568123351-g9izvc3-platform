export default function Navbar({ lang, onLangChange, labels, brand }) {
  const langs = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'hy', label: 'HY' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="group inline-flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-rose-500 to-amber-500 shadow-sm"></span>
          <span className="text-lg font-semibold tracking-tight group-hover:text-rose-600 transition-colors">{brand}</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#home" className="text-sm text-slate-600 hover:text-slate-900 transition">{labels.home}</a>
          <a href="#destinations" className="text-sm text-slate-600 hover:text-slate-900 transition">{labels.destinations}</a>
          <a href="#gallery" className="text-sm text-slate-600 hover:text-slate-900 transition">{labels.gallery}</a>
          <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900 transition">{labels.contact}</a>
        </nav>

        <div className="flex items-center gap-2">
          {langs.map((l) => (
            <button
              key={l.code}
              onClick={() => onLangChange(l.code)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition border ${
                lang === l.code
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
              aria-pressed={lang === l.code}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto block max-w-6xl px-6 pb-3 md:hidden">
        <nav className="flex items-center gap-6 overflow-x-auto">
          <a href="#home" className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700">{labels.home}</a>
          <a href="#destinations" className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700">{labels.destinations}</a>
          <a href="#gallery" className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700">{labels.gallery}</a>
          <a href="#contact" className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700">{labels.contact}</a>
        </nav>
      </div>
    </header>
  )
}
