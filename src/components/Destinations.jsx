const DATA = [
  {
    name: { en: 'Tatev Monastery', ru: 'Монастырь Татев', hy: 'Տաթևի վանք' },
    desc: {
      en: 'A 9th‑century cliffside monastery reached by the Wings of Tatev cableway.',
      ru: 'Скальный монастырь IX века, до которого ведёт канатная дорога «Крылья Татева».',
      hy: 'IX դարի վանքային համալիր՝ հասանելի «Տաթևի թևեր» ճոպանուղով։',
    },
    img: 'https://images.unsplash.com/photo-1568667256531-7d5ac292b266?q=80&w=1960&auto=format&fit=crop',
  },
  {
    name: { en: 'Lake Sevan', ru: 'Озеро Севан', hy: 'Սևանա լիճ' },
    desc: {
      en: 'The “pearl of Armenia” with turquoise waters and Sevanavank monastery.',
      ru: '«Жемчужина Армении» с бирюзовой водой и монастырём Севанаванк.',
      hy: '«Հայաստանի մարգարիտը»՝ փիրուզագույն ջրերով և Սևանավանքով։',
    },
    img: 'https://images.unsplash.com/photo-1606935737847-38d2d2cbf564?q=80&w=1960&auto=format&fit=crop',
  },
  {
    name: { en: 'Garni Temple', ru: 'Храм Гарни', hy: 'Գառնիի տաճար' },
    desc: {
      en: 'A Hellenistic temple overlooking the stunning basalt symphony canyon.',
      ru: 'Античный храм с видом на впечатляющий базальтовый каньон «симфония камней».',
      hy: 'Հելլենիստական տաճար՝ բացվող տեսարանով դեպի բազալտե «քարերի սիմֆոնիա» կիրճը։',
    },
    img: 'https://images.unsplash.com/photo-1587911914779-b7b57ede51d9?q=80&w=1960&auto=format&fit=crop',
  },
  {
    name: { en: 'Yerevan', ru: 'Ереван', hy: 'Երևան' },
    desc: {
      en: 'A pink‑tinted capital with lively cafes, Cascade Complex, and museums.',
      ru: '«Розовая» столица с уютными кафе, Каскадом и музеями.',
      hy: 'Վարդագույն մայրաքաղաքը՝ սրճարաններով, Կասկադով և թանգարաններով։',
    },
    img: 'https://images.unsplash.com/photo-1582994994021-6f980c2a5480?q=80&w=1960&auto=format&fit=crop',
  },
]

export default function Destinations({ title }) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        <div className="text-sm text-slate-500">4 picks</div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {DATA.map((item) => (
          <article key={item.img} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
            <div className="relative h-44 w-full overflow-hidden">
              <img src={item.img} alt={item.name.en} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-slate-900">
                <LangText dict={item.name} />
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                <LangText dict={item.desc} />
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function LangText({ dict }) {
  const lang = document.documentElement.getAttribute('data-lang') || 'en'
  return dict[lang] || dict.en
}
