export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white py-28">

      <div className="max-w-6xl mx-auto px-6 text-center animate-[fadeIn_1s_ease-out]">

        {/* TITLE */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
          Gaming Community Hub
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Join our gaming squads, compete in tournaments, and meet gamers from around the world.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-5 flex-wrap">

          <a
            href="/join"
            className="bg-purple-600 hover:bg-purple-700 hover:scale-105 px-7 py-3 rounded-xl font-semibold shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
          >
            Join Community
          </a>

          <a
            href="/events"
            className="border border-purple-600 px-7 py-3 rounded-xl hover:bg-purple-600 hover:scale-105 transition-all duration-300"
          >
            View Events
          </a>

        </div>

      </div>

      {/* SIMPLE KEYFRAME */}
      <style>
        {`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        `}
      </style>

    </section>
  );
}