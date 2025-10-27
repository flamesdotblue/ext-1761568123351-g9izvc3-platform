import { useEffect } from 'react'

const IMAGES = [
  'https://images.unsplash.com/photo-1587911914779-b7b57ede51d9?q=80&w=2060&auto=format&fit=crop', // Garni
  'https://images.unsplash.com/photo-1568667256531-7d5ac292b266?q=80&w=2060&auto=format&fit=crop', // Tatev
  'https://images.unsplash.com/photo-1606935737847-38d2d2cbf564?q=80&w=2060&auto=format&fit=crop', // Sevan
  'https://images.unsplash.com/photo-1582994994021-6f980c2a5480?q=80&w=2060&auto=format&fit=crop', // Yerevan
  'https://images.unsplash.com/photo-1546549039-49c787103f8a?q=80&w=2060&auto=format&fit=crop', // Khor Virap / Ararat
  'https://images.unsplash.com/photo-1569428129412-67f3b50e5ce1?q=80&w=2060&auto=format&fit=crop', // Ararat view
]

export default function Gallery({ title }) {
  useEffect(() => {
    // enhance smooth scrolling for anchor links
    if ('scrollBehavior' in document.documentElement.style) return
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      e.preventDefault()
      const id = a.getAttribute('href').slice(1)
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      <div className="columns-1 gap-4 sm:columns-2 md:columns-3">
        {IMAGES.map((src, i) => (
          <figure key={src} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
            <img src={src} alt={`Armenia scene ${i + 1}`} className="w-full object-cover transition hover:opacity-95" loading={i > 2 ? 'lazy' : 'eager'} />
          </figure>
        ))}
      </div>
    </div>
  )
}
