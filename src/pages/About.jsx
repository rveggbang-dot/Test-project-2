export default function About() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          About Our Community
        </h1>

        {/* DIVIDER */}
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded"></div>

        {/* CONTENT CARD */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-lg">
          <p className="text-gray-300 text-lg leading-relaxed">
            William Community adalah komunitas gaming yang berfokus pada
            kompetisi, scrim, dan membangun squad esports yang solid.
            Kami terbuka untuk pemain Mobile Legends, PUBG, Valorant
            dan game kompetitif lainnya.
          </p>
        </div>

      </div>
    </section>
  );
}