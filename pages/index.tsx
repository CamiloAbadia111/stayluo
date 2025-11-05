import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Head>
        <title>StayLuo · A curated stay in the heart of Tulum</title>
        <meta name="description" content="Boutique stays where comfort meets calm. Direct booking, no hidden fees." />
      </Head>

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl grid place-items-center font-bold text-white bg-black">SL</div>
            <span className="font-semibold">StayLuo</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-black">About</a>
            <a href="#gallery" className="hover:text-black">Gallery</a>
            <a href="#book" className="hover:text-black">Book</a>
            <a href="#host" className="hover:text-black">List your property</a>
          </nav>
          <a href="#book" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm md:text-base font-medium text-white bg-black">Book</a>
        </div>
      </header>

      <section id="top" className="bg-sand">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
          <div className="rounded-[28px] overflow-hidden shadow-sm border border-black/5">
            <img src="/hero.jpg" alt="Tulum - hero placeholder" className="w-full h-[56vh] md:h-[70vh] object-cover" />
          </div>
          <h1 className="mt-8 text-3xl md:text-5xl font-serif text-gray-900 leading-tight text-center">
            <span className="block text-xl md:text-2xl text-gray-700">A curated stay in the heart of Tulum</span>
            <span className="block mt-2 font-semibold">Forever StayLuo</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-center text-gray-700">
            Boutique hospitality blending Miami luxury cues with Tulum's natural serenity.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#about" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm md:text-base font-medium text-white bg-black">Explore</a>
            <a href="#book" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm md:text-base font-medium border border-black/10 bg-white">Book</a>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-black/10 p-6 shadow-sm bg-white">
            <h2 className="text-2xl font-semibold">Comfort meets calm</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Thoughtfully designed spaces with private rooftop and plunge pool. Secure access in Canopia.
              Direct booking, no hidden fees, personal attention from our team.
            </p>
            <ul className="mt-4 list-disc ml-5 text-gray-700 space-y-1">
              <li>High-speed Wi-Fi</li>
              <li>Private plunge pool & daybeds</li>
              <li>Fully equipped kitchenette</li>
              <li>A/C & ceiling fans</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-black/10 p-6 shadow-sm bg-white">
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="mt-2 text-gray-700">Minutes from beaches, cenotes and gastronomy.</p>
            <div className="rounded-2xl overflow-hidden border border-black/10 mt-4">
              <iframe
                title="Map - Tulum"
                className="w-full h-[300px] md:h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7558.944557293859!2d-87.474!3d20.2115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4f4f5acb3d8a81%3A0x0000000000000000!2sTulum!5e0!3m2!1ses-419!2smx!4v1700000000000"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 md:py-24 bg-sand">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Gallery</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-black/10 shadow-sm">
                <img src={`/hero.jpg`} alt={`Placeholder ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-black/10 p-6 shadow-sm bg-white">
            <h3 className="text-lg font-semibold">Check availability</h3>
            <p className="mt-2 text-sm text-gray-600">
              Here you can connect your booking engine (Stripe + form) or link to Airbnb / Booking.
            </p>
            <a href="#" className="inline-flex mt-4 items-center justify-center rounded-2xl px-5 py-3 text-sm md:text-base font-medium text-white bg-black">Request dates</a>
          </div>
          <div className="rounded-3xl border border-black/10 p-6 shadow-sm bg-white">
            <h3 className="text-lg font-semibold">Direct booking</h3>
            <p className="mt-2 text-sm text-gray-600">Prefer WhatsApp or email? We’ll reply personally.</p>
            <div className="mt-4 space-y-3">
              <a className="w-full inline-flex items-center justify-center rounded-2xl border border-black/10 py-3" href="https://wa.me/5210000000000">WhatsApp</a>
              <a className="w-full inline-flex items-center justify-center rounded-2xl border border-black/10 py-3" href="mailto:reservas@stayluo.com">reservas@stayluo.com</a>
            </div>
          </div>
        </div>
      </section>

      <section id="host" className="py-16 md:py-24 bg-sand">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-black/10 p-6 shadow-sm bg-white">
            <h3 className="text-lg font-semibold">List your property with StayLuo</h3>
            <p className="mt-2 text-sm text-gray-700">We co-manage select homes with elevated standards.</p>
            <ul className="list-disc ml-5 mt-3 text-gray-700 space-y-1">
              <li>Brand & styling guidance</li>
              <li>Pricing strategy & calendar optimization</li>
              <li>Guest communication & coordination</li>
            </ul>
          </div>
          <form className="rounded-3xl border border-black/10 p-6 shadow-sm bg-white grid gap-3">
            <input className="rounded-xl border border-black/10 px-4 py-3" placeholder="Full name" />
            <input className="rounded-xl border border-black/10 px-4 py-3" placeholder="Email" />
            <input className="rounded-xl border border-black/10 px-4 py-3" placeholder="WhatsApp" />
            <textarea className="rounded-xl border border-black/10 px-4 py-3" rows={4} placeholder="Home type, m2, bedrooms, standout features" />
            <button type="button" className="rounded-2xl px-5 py-3 bg-black text-white font-medium">Send application</button>
          </form>
        </div>
      </section>

      <footer className="bg-white border-t border-black/5">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-2xl grid place-items-center font-bold text-white bg-black">SL</div>
              <span className="font-semibold">StayLuo</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 max-w-xs">Boutique stays where comfort meets calm.</p>
          </div>
          <div>
            <h4 className="font-semibold">Site</h4>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#book">Book</a></li>
              <li><a href="#host">List your property</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li><a href="mailto:reservas@stayluo.com">reservas@stayluo.com</a></li>
              <li><a href="https://wa.me/5210000000000">WhatsApp</a></li>
              <li>© {new Date().getFullYear()} StayLuo</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
