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

      <section id="top" className="bg-[#F6F5F1]">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
          <div className="rounded-[28px] overflow-hidden shadow-sm border border-black/5">
            <img src="/hero.jpg" alt="Tulum - hero placeholder" className="w-full h-[56vh] md:h-[70vh] object-cover" />
          </div>
          <h1 className="mt-8 text-3xl md:text-5xl font-serif text-gray-900 leading-tight text-center">
            <span className="block text-xl md:text-2xl text-gray-700">A curated stay in the heart of Tulum</span>
            <span className="block mt-2 font-semibold">Forever StayLuo</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-center text-gray-700">
            Boutique hospitality blending Miami luxury cues with Tulum&apos;s natural serenity.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#about" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm md:text-base font-medium text-white bg-black">Explore</a>
            <a href="#book" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm md:text-base font-medium border border-black/10 bg-white">Book</a>
          </div>
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
