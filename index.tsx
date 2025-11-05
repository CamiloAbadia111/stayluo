
import React, { useEffect } from 'react'

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1600585154340-1e4ce9a8d9d4?q=80&w=2400&auto=format&fit=crop',
  gallery1: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1600&auto=format&fit=crop',
  gallery2: 'https://images.unsplash.com/photo-1616594039964-ae9021e61051?q=80&w=1600&auto=format&fit=crop',
  gallery3: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2400&auto=format&fit=crop',
}

const CONTACT = {
  whatsapp: '5210000000000',
  email: 'reservas@stayluo.com',
}

const PALETTE = {
  sand: '#F6F5F1',
  black: '#222222',
  gold: '#C4A777',
  olive: '#4A5442',
  aqua: '#3AB9C6',
}

const Btn = ({ href = '#', children, variant = 'solid' }: { href?: string; children: React.ReactNode; variant?: 'solid' | 'ghost' }) => {
  const base = 'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm md:text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  const v = variant === 'solid' ? 'text-white hover:opacity-90' : `border border-black/10 bg-white text-[${PALETTE.black}] hover:bg-black/5`
  const style = variant === 'solid' ? { background: PALETTE.black as string, boxShadow: '0 0 0 0' } : {}
  return (
    <a href={href} className={`${base} ${v}`} style={style as any}>
      {children}
    </a>
  )
}

const SectionHead = ({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) => (
  <div className="max-w-3xl mx-auto text-center">
    {kicker && (
      <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs tracking-widest uppercase"
        style={{ background: PALETTE.sand, color: PALETTE.olive }}>
        {kicker}
      </div>
    )}
    <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-gray-900">{title}</h2>
    {subtitle && <p className="mt-3 text-gray-600 leading-relaxed">{subtitle}</p>}
  </div>
)

const Header = () => (
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="#top" className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-2xl grid place-items-center font-bold text-white" style={{ background: PALETTE.black }}>SL</div>
        <span className="font-semibold">StayLuo</span>
      </a>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#experience" className="hover:text-black">Experience</a>
        <a href="#tulum-ph" className="hover:text-black">Tulum PH</a>
        <a href="#amenities" className="hover:text-black">Amenities</a>
        <a href="#location" className="hover:text-black">Location</a>
        <a href="#list" className="hover:text-black">List your property</a>
        <a href="#book" className="hover:text-black">Book</a>
      </nav>
      <a href="#book" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm md:text-base font-medium text-white" style={{background: PALETTE.black}}>Book Your Stay</a>
    </div>
  </header>
)

const Hero = () => (
  <section id="top" className="bg-[#F6F5F1]">
    <div className="max-w-6xl mx-auto px-4 pt-10 pb-14 md:pb-20">
      <div className="grid lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-12">
          <div className="rounded-[28px] overflow-hidden shadow-sm border border-black/5">
            <img src={IMAGES.hero} alt="Private terrace and pool surrounded by jungle – StayLuo Tulum" className="w-full h-[48vh] md:h-[64vh] object-cover" />
          </div>
        </div>
        <div className="lg:col-span-12">
          <h1 className="mt-8 text-3xl md:text-5xl font-serif text-gray-900 leading-tight text-center">
            <span className="block text-xl md:text-2xl text-gray-700">A curated stay in the heart of Tulum</span>
            <span className="block mt-2 font-semibold">Forever StayLuo</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-center text-gray-700">
            Where design, nature, and calm coexist in perfect balance.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#tulum-ph" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm md:text-base font-medium text-white" style={{background: PALETTE.black}}>Discover the Space</a>
            <a href="#book" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm md:text-base font-medium border border-black/10 bg-white" >Book Your Stay</a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Experience = () => (
  <section id="experience" className="py-16 md:py-24 bg-white">
    <SectionHead
      kicker="StayLuo · Tulum"
      title="Where comfort meets calm"
      subtitle="A boutique hospitality project blending Miami luxury cues with Tulum's natural serenity. Direct booking, no hidden fees, true service."
    />
    <div className="max-w-6xl mx-auto px-4 mt-10 grid md:grid-cols-3 gap-6">
      {['Design‑forward', 'Nature‑connected', 'Quiet & Secure'].map((t) => (
        <div key={t} className="rounded-2xl border border-black/10 p-6 shadow-sm bg-white">
          <div className="text-sm uppercase tracking-widest" style={{ color: PALETTE.olive }}>Pillar</div>
          <h3 className="mt-2 text-lg font-semibold">{t}</h3>
          <p className="mt-2 text-sm text-gray-600">Curated interiors, controlled access in Canopia, and a rooftop with private plunge pool.</p>
        </div>
      ))}
    </div>
  </section>
)

const TulumPH = () => (
  <section id="tulum-ph" className="py-16 md:py-24" style={{ background: PALETTE.sand }}>
    <SectionHead
      kicker="Penthouse Dúplex"
      title="Tulum PH · Private Rooftop + Plunge Pool"
      subtitle="40 m² indoor + 40 m² rooftop with daybeds and jungle views. Thoughtfully equipped for two."
    />
    <div className="max-w-6xl mx-auto px-4 mt-10 grid md:grid-cols-2 gap-6">
      <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow border border-black/5">
        <img src={IMAGES.gallery1} alt="Bright living room with natural finishes" className="w-full h-full object-cover" />
      </div>
      <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow border border-black/5">
        <img src={IMAGES.gallery2} alt="Rooftop daybeds and plunge pool" className="w-full h-full object-cover" />
      </div>
      <div className="md:col-span-2 aspect-[21/9] rounded-3xl overflow-hidden shadow border border-black/5">
        <img src={IMAGES.gallery3} alt="Bedroom with calm tones" className="w-full h-full object-cover" />
      </div>
    </div>
  </section>
)

const Amenities = () => (
  <section id="amenities" className="py-16 md:py-24 bg-white">
    <SectionHead
      kicker="Confort & seguridad"
      title="Amenities curated for the modern traveler"
      subtitle="Everything you need for an impeccable stay."
    />
    <div className="max-w-6xl mx-auto px-4 mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {[
        'Controlled access in Canopia',
        'High‑speed Wi‑Fi',
        'A/C & ceiling fans',
        'Fully equipped kitchenette',
        'Private plunge pool',
        'Daybeds & rooftop lounge',
        'Safe box',
        'Parking',
        'Washer/Dryer (or service)',
      ].map((a) => (
        <div key={a} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="font-medium">{a}</div>
          <p className="mt-2 text-sm text-gray-600">Replace with actual inventory details.</p>
        </div>
      ))}
    </div>
  </section>
)

const Location = () => (
  <section id="location" className="py-16 md:py-24" style={{ background: PALETTE.sand }}>
    <SectionHead
      kicker="Tulum · Quintana Roo"
      title="Location & surroundings"
      subtitle="Minutes from the beach, cenotes and gastronomy. Calm neighborhood, controlled entries."
    />
    <div className="max-w-6xl mx-auto px-4 mt-10 grid lg:grid-cols-2 gap-6 items-stretch">
      <div className="rounded-3xl overflow-hidden shadow border border-black/10 bg-white">
        <iframe
          title="Map – Canopia Tulum"
          className="w-full h-[360px] md:h-[420px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7558.944557293859!2d-87.474!3d20.2115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4f4f5acb3d8a81%3A0x0000000000000000!2sTulum!5e0!3m2!1ses-419!2smx!4v1700000000000"
        />
      </div>
      <div className="rounded-3xl border border-black/10 p-6 shadow-sm bg-white">
        <h3 className="text-xl font-semibold">Distances (approx.)</h3>
        <ul className="list-disc ml-5 mt-3 text-gray-700 space-y-1">
          <li>Beach: 12–15 min</li>
          <li>Archaeological zone: 20 min</li>
          <li>Cenotes: 10–25 min</li>
          <li>Tulum center: 8–10 min</li>
        </ul>
        <h3 className="mt-6 text-xl font-semibold">Security</h3>
        <ul className="list-disc ml-5 mt-3 text-gray-700 space-y-1">
          <li>Controlled access</li>
          <li>Surveillance staff</li>
          <li>Common areas lighting</li>
        </ul>
      </div>
    </div>
  </section>
)

const Book = () => (
  <section id="book" className="py-16 md:py-24 bg-white">
    <SectionHead
      kicker="Direct & secure"
      title="Check availability and rates"
      subtitle="Book with us with no hidden fees. Prefer WhatsApp? We'll answer personally."
    />
    <div className="max-w-5xl mx-auto px-4 mt-10 grid md:grid-cols-2 gap-6">
      <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold">Calendar</h3>
        <p className="mt-2 text-sm text-gray-600">Integrate your booking engine here (Stripe + form, Calendly with payments, or a PMS widget).</p>
        <a href="#" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm md:text-base font-medium text-white" style={{background: PALETTE.black}}>Request Dates</a>
      </div>
      <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold">Contact</h3>
        <div className="mt-4 space-y-3">
          <a
            className="w-full inline-flex items-center justify-center rounded-2xl border border-black/10 py-3"
            href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%20StayLuo%2C%20I%27d%20like%20to%20check%20dates%20for%20Tulum%20PH.`}
          >WhatsApp</a>
          <a className="w-full inline-flex items-center justify-center rounded-2xl border border-black/10 py-3" href={`mailto:${CONTACT.email}?subject=Booking%20Tulum%20PH`}>
            {CONTACT.email}
          </a>
        </div>
        <p className="mt-4 text-xs text-gray-500">By booking you accept terms and cancellation policies.</p>
      </div>
    </div>
  </section>
)

const ListProperty = () => (
  <section id="list" className="py-16 md:py-24 bg-white">
    <SectionHead
      kicker="Partner program"
      title="List your property with StayLuo"
      subtitle="We co-manage select homes with design standards. Join a boutique portfolio and reach international guests."
    />
    <div className="max-w-6xl mx-auto px-4 mt-10 grid lg:grid-cols-2 gap-6">
      <div className="rounded-3xl border border-black/10 p-6 shadow-sm bg-white">
        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc ml-5 mt-3 text-gray-700 space-y-2">
          <li>Brand & styling guidance to elevate your listing</li>
          <li>Professional photography direction</li>
          <li>Pricing strategy & calendar optimization</li>
          <li>Guest communication & on‑site coordination</li>
        </ul>
        <h3 className="mt-6 text-lg font-semibold">Commission</h3>
        <p className="mt-2 text-sm text-gray-600">Suggested: <b>15%</b> management fee + cleaning handled separately (customizable).</p>
      </div>
      <div className="rounded-3xl border border-black/10 p-6 shadow-sm bg-white">
        <h3 className="text-lg font-semibold">Apply (no login)</h3>
        <p className="mt-2 text-sm text-gray-600">Complete this short form. We'll review and reply within 24–48h.</p>
        <form className="mt-4 grid gap-3">
          <input className="rounded-xl border border-black/10 px-4 py-3" placeholder="Full name" />
          <input className="rounded-xl border border-black/10 px-4 py-3" placeholder="Email" />
          <input className="rounded-xl border border-black/10 px-4 py-3" placeholder="WhatsApp" />
          <input className="rounded-xl border border-black/10 px-4 py-3" placeholder="Location (City/Area)" />
          <textarea className="rounded-xl border border-black/10 px-4 py-3" rows={4} placeholder="Home type, m², bedrooms, standout features" />
          <button type="button" className="rounded-2xl px-5 py-3 bg-black text-white font-medium">Send application</button>
        </form>
        <p className="mt-3 text-xs text-gray-500">By submitting you accept our privacy policy.</p>
      </div>
    </div>
  </section>
)

export default function Home() {
  useEffect(() => {
    try {
      console.assert(!!document.getElementById('top'), '#top section should exist')
      console.assert(!!document.getElementById('tulum-ph'), '#tulum-ph section should exist')
      console.assert(!!document.getElementById('book'), '#book section should exist')
    } catch {}
  }, [])

  return (
    <div className="font-[ui-sans-serif] text-gray-900 bg-white">
      <Header />
      <Hero />
      <Experience />
      <TulumPH />
      <Amenities />
      <Location />
      <ListProperty />
      <Book />
      <footer className="bg-white border-t border-black/5">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-2xl grid place-items-center font-bold text-white" style={{ background: PALETTE.black }}>SL</div>
              <span className="font-semibold">StayLuo</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 max-w-xs">Boutique stays where comfort meets calm.</p>
          </div>
          <div>
            <h4 className="font-semibold">Site</h4>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li><a href="#experience">Experience</a></li>
              <li><a href="#tulum-ph">Tulum PH</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#location">Location</a></li>
              <li><a href="#list">List your property</a></li>
              <li><a href="#book">Book</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li><a href={`https://wa.me/${CONTACT.whatsapp}`}>WhatsApp</a></li>
              <li>© {new Date().getFullYear()} StayLuo</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
