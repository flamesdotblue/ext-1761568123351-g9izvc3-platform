import { useState, useMemo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Gallery from './components/Gallery'

const translations = {
  en: {
    brand: 'Discover Armenia',
    nav: { home: 'Home', destinations: 'Destinations', gallery: 'Gallery', contact: 'Contact' },
    heroTitle: 'Timeless Armenia',
    heroSubtitle: 'Ancient monasteries, dramatic mountains, and vibrant city life — all in one unforgettable journey.',
    heroCta: 'Start Exploring',
    destinationsTitle: 'Top Destinations',
    galleryTitle: 'Visual Journey',
    contactTitle: 'Plan Your Trip',
    contactText: 'Ready to visit? Get in touch and we will help you craft the perfect itinerary in Armenia.'
  },
  ru: {
    brand: 'Открой Армению',
    nav: { home: 'Главная', destinations: 'Направления', gallery: 'Галерея', contact: 'Контакты' },
    heroTitle: 'Вечная Армения',
    heroSubtitle: 'Древние монастыри, величественные горы и яркая городская жизнь — в одном незабываемом путешествии.',
    heroCta: 'Начать исследование',
    destinationsTitle: 'Лучшие направления',
    galleryTitle: 'Путешествие в кадрах',
    contactTitle: 'Спланируйте поездку',
    contactText: 'Готовы посетить? Свяжитесь с нами, и мы поможем составить идеальный маршрут по Армении.'
  },
  hy: {
    brand: 'Բացահայտիր Հայաստանը',
    nav: { home: 'Գլխավոր', destinations: 'Ուղղություններ', gallery: 'Պատկերասրահ', contact: 'Կապ' },
    heroTitle: 'Հավերժական Հայաստան',
    heroSubtitle: 'Հնագույն վանքեր, վեհ ամբարձություններ և աշխույժ քաղաքային կյանք՝ մեկ անմոռանալի ճանապարհորդության մեջ։',
    heroCta: 'Սկսել բացահայտումը',
    destinationsTitle: 'Լավագույն ուղղություններ',
    galleryTitle: 'Տեսողական ուղեւորություն',
    contactTitle: 'Պլանավորեք Ձեր ուղեւորությունը',
    contactText: 'Պատրա՞ստ եք այցելել։ Կապվեք մեզ հետ, և մենք կօգնենք կազմել կատարյալ երթուղի Հայաստանում։'
  }
}

export default function App() {
  const [lang, setLang] = useState('en')
  const t = useMemo(() => translations[lang], [lang])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Navbar lang={lang} onLangChange={setLang} labels={t.nav} brand={t.brand} />

      <main>
        <section id="home">
          <Hero title={t.heroTitle} subtitle={t.heroSubtitle} cta={t.heroCta} />
        </section>

        <section id="destinations" className="scroll-mt-20">
          <Destinations title={t.destinationsTitle} />
        </section>

        <section id="gallery" className="scroll-mt-20">
          <Gallery title={t.galleryTitle} />
        </section>

        <section id="contact" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="rounded-2xl bg-gradient-to-br from-rose-50 to-amber-50 p-8 shadow-sm ring-1 ring-black/5 md:p-12">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{t.contactTitle}</h2>
              <p className="mt-3 max-w-2xl text-slate-700">{t.contactText}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="mailto:travel@discoverarmenia.example" className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-5 py-3 text-white shadow-sm transition hover:bg-rose-700">travel@discoverarmenia.example</a>
                <a href="tel:+37400000000" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-700 transition hover:bg-white">+374 00 00 00 00</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {t.brand}</p>
          <p>Made with love for travelers</p>
        </div>
      </footer>
    </div>
  )
}
